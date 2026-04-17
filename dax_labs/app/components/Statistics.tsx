'use client';

import { useEffect, useState } from 'react';

const stats = [
  { value: 17, suffix: ' Years', label: 'Years of Excellence' },
  { value: 14000, suffix: '+', label: 'Applications Secured' },
  { value: 4000, suffix: '+', label: 'Clients Trusted' },
  { value: 200, suffix: '+', label: 'Security Professionals' },
];

function AnimatedCounter({ value, isVisible }: { value: number; isVisible: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <>{count.toLocaleString()}</>;
}

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('statistics-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section id="statistics-section" className="py-24 lg:py-32 bg-[var(--color-bg-secondary)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p
            className={`text-sm font-semibold text-[var(--color-accent)] tracking-[0.3em] uppercase mb-4 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            BY THE NUMBERS
          </p>
          <h2
            className={`text-3xl sm:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] tracking-tight transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.1s' }}
          >
            Our Competitive Edge
          </h2>
          <p
            className={`mt-6 text-xl text-[var(--color-text-secondary)] leading-relaxed transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '0.2s' }}
          >
            Proven track record of delivering exceptional security outcomes for organizations worldwide.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`group text-center relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${0.3 + index * 0.1}s`, transition: 'all 0.7s ease-out' }}
            >
              {/* Card background */}
              <div className="absolute inset-0 bg-[var(--color-bg-primary)] rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 transform group-hover:scale-105" />

              {/* Animated Counter */}
              <div className="relative">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[var(--color-accent)]">
                    <AnimatedCounter value={stat.value} isVisible={isVisible} />
                  </span>
                  <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[var(--color-accent)] ml-1">
                    {stat.suffix}
                  </span>
                </div>
              </div>

              {/* Label */}
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-[var(--color-text-secondary)] font-medium">
                {stat.label}
              </p>

              {/* Decorative underline */}
              <div className="mt-6 h-1 w-12 mx-auto bg-[var(--color-border)] rounded-full group-hover:bg-[var(--color-accent)] group-hover:w-20 transition-all duration-500" />

              {/* Corner accents */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[var(--color-border)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
