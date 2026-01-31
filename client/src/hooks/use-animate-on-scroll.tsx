import { useEffect, useRef, useState } from "react";

interface UseAnimateOnScrollOptions {
  threshold?: number;
  triggerOnce?: boolean;
}

export function useAnimateOnScroll(
  options: UseAnimateOnScrollOptions = {}
) {
  const { threshold = 0.3, triggerOnce = true } = options;
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (triggerOnce && ref.current) {
            observer.unobserve(ref.current);
          }
        } else if (!triggerOnce) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, triggerOnce]);

  return { ref, isVisible };
}
