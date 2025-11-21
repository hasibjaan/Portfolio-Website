"use client"

import { Globe, Server, Database, Palette, Lightbulb, Wrench, Check } from 'lucide-react';
import { portfolioConfig } from '../config/portfolio';

export default function Services() {
  // Icon mapping
  const iconMap = {
    globe: Globe,
    server: Server,
    database: Database,
    palette: Palette,
    lightbulb: Lightbulb,
    wrench: Wrench
  };

  return (
    <section id="services" className="py-20 px-6 bg-black/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            What I Do
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Comprehensive development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioConfig.services.map((service, idx) => {
            const Icon = iconMap[service.icon];

            return (
              <div
                key={idx}
                className="backdrop-blur-xl bg-white/10 rounded-3xl p-8 border border-purple-500/20 hover:bg-white/15 hover:scale-105 hover:border-purple-500/40 transition-all duration-300 shadow-xl hover:shadow-purple-500/30 group"
              >
                {/* Icon */}
                <div className="mb-6">
                  <div className="inline-block p-4 rounded-2xl backdrop-blur-xl bg-purple-600/30 border border-purple-400/50 group-hover:bg-purple-600/50 transition-all duration-300">
                    <Icon className="text-purple-300 group-hover:text-purple-200 transition-colors duration-300" size={36} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-3">
                  {service.features.map((feature, featureIdx) => (
                    <li
                      key={featureIdx}
                      className="flex items-start space-x-3 text-gray-400 group-hover:text-gray-300 transition-colors duration-300"
                    >
                      <Check className="text-purple-400 flex-shrink-0 mt-0.5" size={18} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-300 mb-6">
            Ready to start your project?
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 rounded-full backdrop-blur-xl bg-purple-600/30 border border-purple-400/50 hover:bg-purple-600/50 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 text-lg font-semibold"
          >
            Let's Work Together
          </a>
        </div>
      </div>
    </section>
  );
}