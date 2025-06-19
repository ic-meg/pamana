import { useEffect } from "react";

export default function useScrollAnim(
  selector = ".scrollAnim",
  threshold = 0.3,
  trigger = null
) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const el = entry.target;

          if (entry.isIntersecting) {
            el.classList.add("animVisible");
            el.classList.remove("animInvisible");

            // Stop observing this element to animate only once
            observer.unobserve(el);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -20% 0px",
      }
    );

    const elements = document.querySelectorAll(selector);
    elements.forEach((el) => {
      el.classList.add("animInvisible");
      observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [selector, threshold, trigger]);
}
