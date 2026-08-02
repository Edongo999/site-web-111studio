import { useEffect, useRef } from "react";
export default function useReveal(options = {}) {
    const { root = null, rootMargin = "0px 0px -8% 0px", threshold = 0.08, stagger = 120, mode = "smooth", } = options;
    const containerRef = useRef(null);
    useEffect(() => {
        if (!containerRef.current || typeof IntersectionObserver === "undefined")
            return;
        const items = Array.from(containerRef.current.querySelectorAll(".reveal"));
        if (items.length === 0)
            return;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    const idxAttr = el.getAttribute("data-reveal-index");
                    const idx = idxAttr ? parseInt(idxAttr, 10) : items.indexOf(el);
                    const delay = Math.max(0, idx * stagger);
                    window.setTimeout(() => {
                        el.classList.add(mode === "fade" ? "reveal--visible--fade" : "reveal--visible");
                    }, delay);
                    observer.unobserve(el);
                }
            });
        }, { root, rootMargin, threshold });
        items.forEach((it) => observer.observe(it));
        return () => observer.disconnect();
    }, [containerRef, root, rootMargin, threshold, stagger, mode]);
    return containerRef;
}
