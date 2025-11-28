import React, { useEffect, useRef, useState } from 'react';

const Section = ({ id, className, children }) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

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
                rootMargin: '50px',
            }
        );

        const currentSection = sectionRef.current;
        if (currentSection) {
            observer.observe(currentSection);
        }

        return () => {
            if (currentSection) {
                observer.unobserve(currentSection);
            }
        };
    }, []);

    return (
        <section
            id={id}
            ref={sectionRef}
            className={`section ${className || ''} ${isVisible ? 'fade-in' : ''}`}
            style={{ opacity: 0 }} // Initial state before animation class is added
        >
            {children}
        </section>
    );
};

export default Section;
