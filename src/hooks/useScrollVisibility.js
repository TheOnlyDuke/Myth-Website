import { useState, useEffect, useCallback, useRef } from "react";

export function useScrollVisibility(heroId) {
  const [isVisible, setIsVisible] = useState(true);
  const [isPassedHero, setIsPassedHero] = useState(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;

    if (isPassedHero) {
      setIsVisible(currentScrollY < lastScrollY.current);
    }

    lastScrollY.current = currentScrollY;
  }, [isPassedHero]);

  useEffect(() => {
    const heroSection = document.getElementById(heroId);

    const observer = new IntersectionObserver(
      ([entry]) => setIsPassedHero(!entry.isIntersecting),
      { threshold: 0 }
    );

    if (heroSection) {
      observer.observe(heroSection);
    }

    const onScroll = () => requestAnimationFrame(handleScroll);
    window.addEventListener("scroll", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, [heroId, handleScroll]);

  return { isVisible };
}
