import { useEffect, useRef, useState } from "react";

const Reveal = ({ children, className = "", animation = "reveal", delay = "" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px" // Trigger slightly before element is fully in view
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    // Construct the animation class string
    // If animation is 'fade-up', we use 'reveal' class. 
    // If 'fade-left', use 'reveal-left'.
    // If 'fade-right', use 'reveal-right'.
    // If 'zoom-in', use 'reveal-zoom'.

    let animationClass = "reveal";
    if (animation === "fade-left") animationClass = "reveal-left";
    if (animation === "fade-right") animationClass = "reveal-right";
    if (animation === "zoom-in") animationClass = "reveal-zoom";

    return (
        <div
            ref={ref}
            className={`${animationClass} ${isVisible ? "active" : ""} ${delay} ${className}`}
        >
            {children}
        </div>
    );
};

export default Reveal;
