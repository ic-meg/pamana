import { useEffect } from "react";

export default function useScrollAnim(selector = ".scrollAnim") {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          } else {
            entry.target.classList.remove("opacity-100", "translate-y-0");
            entry.target.classList.add("opacity-0", "translate-y-8");
          }
        }),
      {
        threshold: 0.2,
      }
    );

    document.querySelectorAll(selector).forEach((el) => {
      el.classList.add(
        "transition-all",
        "duration-700",
        "ease-out",
        "opacity-0",
        "translate-y-8"
      );
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, [selector]);
}
