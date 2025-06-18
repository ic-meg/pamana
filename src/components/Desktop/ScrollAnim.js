import { useEffect } from "react"

export default function useScrollAnim(
  selector = ".scrollAnim",
  threshold = 0.3,
  trigger = null
) {
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
              el.classList.remove("animVisible")
              el.classList.add("animInvisible")
            }, 200)
            timeoutMap.set(el, timeout)
          }
        })
      },
      {
        threshold,
        rootMargin: "0px 0px -20% 0px",
      }
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => {
      el.classList.add("animInvisible")
      observer.observe(el)
    })

    return () => {
      observer.disconnect()
      timeoutMap.forEach(clearTimeout)
    }
  }, [selector, threshold, trigger])
}
