"use client"

import { ChevronDown, GraduationCap, Heart, Lightbulb } from 'lucide-react';
import { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';

export default function About() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Main Card with Button */}
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl border border-purple-500/20 overflow-hidden shadow-xl">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-8 flex items-center justify-between hover:bg-white/5 transition-all duration-300 group"
          >
            <div className="text-left">
              <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {portfolioConfig.about.title}
              </h2>
              <p className="text-gray-400 text-lg">
                {portfolioConfig.about.subtitle}
              </p>
            </div>
            <ChevronDown 
              className={`text-purple-400 transition-transform duration-500 group-hover:text-pink-400 ${
                isOpen ? 'rotate-180' : ''
              }`}
              size={40}
            />
          </button>

          {/* Dropdown Content */}
          <div
            className={`transition-all duration-700 ease-in-out overflow-hidden ${
              isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="p-8 pt-0 space-y-8">
              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent"></div>

              {/* My Story */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <Lightbulb className="text-purple-400" size={28} />
                  <h3 className="text-2xl font-bold text-purple-300">About Me</h3>
                </div>
                {portfolioConfig.about.story.map((paragraph, idx) => (
                  <p key={idx} className="text-gray-300 leading-relaxed text-lg">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Education */}
              <div className="space-y-4">
                <div className="flex items-center space-x-3 mb-4">
                  <GraduationCap className="text-purple-400" size={28} />
                  <h3 className="text-2xl font-bold text-purple-300">Education</h3>
                </div>
                {portfolioConfig.about.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="backdrop-blur-xl bg-white/5 rounded-2xl p-6 border border-purple-500/20 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{edu.degree}</h4>
                      <span className="text-purple-400 font-semibold">{edu.year}</span>
                    </div>
                    <p className="text-purple-300 mb-2">{edu.school}</p>
                    <p className="text-gray-400">{edu.description}</p>
                  </div>
                ))}
              </div>

              {/* Two Column Grid: Interests & Fun Facts */}
              <div className="grid md:grid-cols-2 gap-6">
                {/* Interests */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <Heart className="text-purple-400" size={28} />
                    <h3 className="text-2xl font-bold text-purple-300">Interests</h3>
                  </div>
                  <div className="space-y-2">
                    {portfolioConfig.about.interests.map((interest, idx) => (
                      <div
                        key={idx}
                        className="flex items-center space-x-3 text-gray-300 backdrop-blur-xl bg-white/5 rounded-xl p-3 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
                      >
                        <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                        <span>{interest}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Fun Facts */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="text-2xl">✨</span>
                    <h3 className="text-2xl font-bold text-purple-300">Fun Facts</h3>
                  </div>
                  <div className="space-y-2">
                    {portfolioConfig.about.funFacts.map((fact, idx) => (
                      <div
                        key={idx}
                        className="text-gray-300 backdrop-blur-xl bg-white/5 rounded-xl p-3 border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300 italic"
                      >
                        {fact}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}