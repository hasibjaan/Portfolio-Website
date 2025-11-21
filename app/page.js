"use client"

import React, { useState } from 'react';
import { Code, Briefcase, Award, MessageSquare, Mail, Github, Linkedin, Twitter, ExternalLink, Star } from 'lucide-react';

import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/projects';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Testimonial from './components/Testimonial';
import About from './components/About';
import Statistics from './components/Statistics';
import Services from './components/Services';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      
      <Header />

      <Hero />

      <About />

      <Statistics />

      <Services />

      <Projects />      

      <Skills />

      <Achievements />

      <Testimonial />

      <Contact />

      <Footer />

    </div>
  );
}