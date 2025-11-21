"use client"

import { Code } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';
import { portfolioConfig } from '../config/portfolio';

export default function Skills() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimate(true);
          }
        });
      },
      {
        threshold: 0.3, // Trigger when 20% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skills = portfolioConfig.skills;

  return (
    <section ref={sectionRef} id="skills" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, idx) => (
            <div
              key={idx}
              className="backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-purple-500/20 hover:bg-white/15 hover:scale-105 transition-all duration-300"
            >
              <Code className="text-purple-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4 text-purple-300">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="text-gray-300">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{item.name}</span>
                      <span className="text-xs text-purple-300">{item.level}%</span>
                    </div>
                    <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
                      <div 
                        className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full relative overflow-hidden transition-all duration-[1500ms] ease-out"
                        style={{ 
                          width: animate ? `${item.level}%` : '0%',
                          transitionDelay: `${itemIdx * 100}ms`
                        }}
                      >
                        {/* Diagonal stripes - download effect */}
                        <div 
                          className="absolute inset-0 animate-download-stripes opacity-20"
                          style={{
                            backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 8px, rgba(255,255,255,0.4) 8px, rgba(255,255,255,0.4) 16px)'
                          }}
                        ></div>
                        
                        {/* Shimmer overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes download-stripes {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 40px 0;
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }

        .animate-download-stripes {
          animation: download-stripes 1s linear infinite;
        }
      `}</style>
    </section>
  );
}