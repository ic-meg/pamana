import { useEffect } from "react";

export default function useScrollAnim(
  selector = ".scrollAnim",
  threshold = 0.3,
  trigger = ""
) {
  useEffect(() => {
    const timeoutMap = new Map();
    const elements = document.querySelectorAll(selector);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;
          const delay = parseInt(el.dataset.delay) || 0;

          if (entry.isIntersecting) {
            clearTimeout(timeoutMap.get(el));
            setTimeout(() => {
              el.classList.add("animVisible");
              el.classList.remove("animInvisible");
            }, delay);
          } else {
            const timeout = setTimeout(() => {
              el.classList.add("animInvisible");
              el.classList.remove("animVisible");
            }, 200);
            timeoutMap.set(el, timeout);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -30% 0px",
      }
    );

    elements.forEach((el) => {
      el.classList.add("animInvisible"); // start hidden
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
      timeoutMap.forEach(clearTimeout);
    };
  }, [selector, threshold, trigger]);
}
