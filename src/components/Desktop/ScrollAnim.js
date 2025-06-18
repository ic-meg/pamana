import { useEffect } from "react"

export default function ScrollAnim(selector = ".scrollAnim", threshold = 0.3) {
  useEffect(() => {
    const timeoutMap = new Map()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target

          if (entry.isIntersecting) {
            clearTimeout(timeoutMap.get(el))
            el.classList.add("animVisible")
            el.classList.remove("animInvisible")
          } else {
            const timeout = setTimeout(() => {
              el.classList.add("animInvisible")
              el.classList.remove("animVisible")
            }, 200)
            timeoutMap.set(el, timeout)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -10% 0px",
      }
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => observer.observe(el))

    return () => {
      observer.disconnect()
      timeoutMap.forEach(clearTimeout)
    }
  }, [selector, threshold])
}
