import React, { useState, useEffect } from 'react';
import SimulationHistory from '../features/simulator/SimulationHistory';

export default function History() {
  const [isLoaded, setIsLoaded] = useState(false);

  // Add smooth entry animation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll to sections
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.getElementById(targetId);
    if (target) {
      target.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigationItems = [
    { href: "/", text: "SIMULATOR", type: "link" },
    { href: "#about", text: "ABOUT ME", type: "scroll" },
    { href: "https://github.com/Marichoii/BlushnBloom", text: "PROJECT", type: "external" },
  ];

  return (
    <main className="relative min-h-screen bg-gradient-to-br from-blush-pink via-blush-pink to-pink-100 text-gray-800 overflow-hidden">
      {/* Enhanced Background Pattern */}
      <div className="absolute inset-0 pointer-events-none select-none">
        <div
          className="absolute top-0 left-0 w-full h-[80px] bg-top bg-repeat-x opacity-60"
          style={{
            backgroundImage: "url('/src/assets/background_bb.svg')",
            backgroundSize: '800px auto'
          }}
        />
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/20" />
      </div>

      {/* Main Content Container */}
      <div className={`relative z-10 min-h-screen flex flex-col transition-all duration-1000 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}>
        
        {/* Header Section */}
        <header className="flex-shrink-0 w-full flex flex-col items-center pt-8 pb-6 px-4 md:px-6">
          {/* Logo */}
          <div className="relative group">
            <img
              src="/src/assets/logo_blushnbloom.svg"
              alt="Blush'n Bloom Logo"
              className="block w-[280px] max-w-[90vw] md:w-[350px] transition-transform duration-300 group-hover:scale-105"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 bg-white/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
          </div>

          {/* Navigation */}
          <nav className="flex justify-center gap-6 md:gap-8 mt-6 mb-8" role="navigation">
            {navigationItems.map((item, idx) => (
              <a
                key={idx}
                href={item.href}
                onClick={item.type === 'scroll' ? (e) => handleSmoothScroll(e, 'about') : undefined}
                target={item.type === 'external' ? "_blank" : "_self"}
                rel={item.type === 'external' ? "noopener noreferrer" : ""}
                className="relative px-3 py-2 text-[#444444] hover:text-blush-deep font-medium text-sm md:text-base
                  transition-all duration-300 group rounded-lg hover:bg-white/30 backdrop-blur-sm
                  after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 
                  after:h-[2px] after:bg-gradient-to-r after:from-blush-deep after:to-pink-500 
                  after:w-0 hover:after:w-full after:transition-all after:duration-300"
              >
                <span className="relative z-10">{item.text}</span>
                {item.type === 'external' && (
                  <span className="ml-1 text-xs opacity-70 group-hover:opacity-100 transition-opacity">↗</span>
                )}
              </a>
            ))}
          </nav>
        </header>

        {/* Main Content */}
        <div className="flex-1 flex flex-col items-center px-4 md:px-6 pb-12">
          {/* Page Title */}
          <div className="w-full max-w-4xl mb-8 text-center">
            <h1 className="text-4xl md:text-5xl font-fancy text-blush-deep mb-4 relative">
              SIMULATION HISTORY
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-0.5 bg-gradient-to-r from-blush-deep to-pink-500 rounded-full" />
            </h1>
            <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
              Review your previous makeup simulations and discover your beauty journey
            </p>
          </div>

          {/* History Section */}
          <section className="w-full max-w-6xl">
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-white/50">
              <SimulationHistory />
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="w-full max-w-2xl mt-16">
            <div className="bg-white/30 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 text-center">
              <h2 className="text-3xl md:text-4xl font-fancy text-blush-deep mb-6 relative">
                ABOUT ME
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-blush-deep to-pink-500 rounded-full" />
              </h2>
              
              <div className="space-y-4 text-gray-700 text-base md:text-lg leading-relaxed">
                <p className="font-medium text-blush-deep">
                  Hello! I'm Mari 👋
                </p>
                <p>
                  A computer science student and frontend developer passionate about building elegant and functional web projects. 
                  Blush'n Bloom was created to showcase clean UI design and to help makeup enthusiasts plan their styles.
                </p>
                <p className="text-sm md:text-base italic text-gray-600">
                  Let's build beautiful things together! ✨
                </p>
              </div>

              {/* Social/Contact Links */}
              <div className="mt-8 flex justify-center gap-4">
                <a
                  href="https://github.com/Marichoii"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-sm transition-all duration-300 hover:scale-105"
                >
                  <span>GitHub</span>
                  <span className="text-xs">↗</span>
                </a>
                <a
                  href="https://github.com/Marichoii/BlushnBloom"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blush-deep hover:bg-pink-600 text-white rounded-full text-sm transition-all duration-300 hover:scale-105"
                >
                  <span>View Project</span>
                  <span className="text-xs">↗</span>
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="flex-shrink-0 py-6 px-4 text-center text-sm text-gray-600">
          <p>© 2025 Blush'n Bloom • Made with 💖 by Mari</p>
        </footer>
      </div>
    </main>
  );
}