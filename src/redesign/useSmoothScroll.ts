import { useEffect } from 'react'
import Lenis from 'lenis'

const HEADER_OFFSET = -72 // sticky header height, keeps anchor titles clear

/**
 * Lenis smooth scroll (https://github.com/darkroomengineering/lenis) — scoped to
 * the redesign. Disabled under prefers-reduced-motion. Anchor links (#…) are
 * routed through lenis.scrollTo with the sticky-header offset.
 */
export function useSmoothScroll() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let rafId = 0
    const raf = (time: number) => {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey) return
      const anchor = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!anchor) return
      const href = anchor.getAttribute('href')
      if (!href) return
      if (href === '#') {
        e.preventDefault()
        lenis.scrollTo(0)
        return
      }
      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()
        lenis.scrollTo(target as HTMLElement, { offset: HEADER_OFFSET })
      }
    }
    document.addEventListener('click', onClick)

    return () => {
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [])
}
