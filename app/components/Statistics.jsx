"use client"

import { Briefcase, Code, Clock, Users } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({});
  const sectionRef = useRef(null);

  // Icon mapping
  const iconMap = {
    briefcase: Briefcase,
    code: Code,
    clock: Clock,
    users: Users
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  const animateCounters = () => {
    portfolioConfig.statistics.forEach((stat, index) => {
      let currentCount = 0;
      const targetValue = stat.value;
      const duration = 2000; // 2 seconds
      const increment = targetValue / (duration / 16); // 60fps

      const counter = setInterval(() => {
        currentCount += increment;
        if (currentCount >= targetValue) {
          currentCount = targetValue;
          clearInterval(counter);
        }
        setCounts(prev => ({
          ...prev,
          [index]: Math.floor(currentCount)
        }));
      }, 16);
    });
  };

  return (
    <section ref={sectionRef} id="statistics" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          By The Numbers
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {portfolioConfig.statistics.map((stat, idx) => {
            const Icon = iconMap[stat.icon];
            const displayValue = counts[idx] !== undefined ? counts[idx] : 0;

            return (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-purple-500/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-purple-500/30 text-center"
                style={{
                  animation: isVisible ? `fadeInUp 0.6s ease-out ${idx * 0.1}s both` : 'none'
                }}
              >
                {/* Icon */}
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full backdrop-blur-xl bg-purple-600/30 border border-purple-400/50">
                    <Icon className="text-purple-300" size={32} />
                  </div>
                </div>

                {/* Animated Number */}
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                  {displayValue}{stat.suffix}
                </div>

                {/* Label */}
                <p className="text-gray-300 text-sm md:text-base font-medium">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}