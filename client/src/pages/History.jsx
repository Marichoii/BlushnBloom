import React from 'react';
import SimulationHistory from '../features/simulator/SimulationHistory';

export default function History() {
  return (
    <main className="relative min-h-screen bg-blush-pink text-gray-800 p-4 md:p-6 flex flex-col items-center">
      <div
        className="absolute top-0 left-0 w-full h-[60px] bg-top bg-repeat-x z-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url('/src/assets/background_bb.svg')",
          backgroundSize: '800px auto'
        }}
      />

      <div className="relative top-5 z-10 w-full max-w-lg flex flex-col items-center">
        {/* Logo */}
        <img
          src="/src/assets/logo_blushnbloom.svg"
          alt="Blush’n Bloom Logo"
          className="block m-0 w-[75%] max-w-[400px]"
        />

        {/* Nav */}
        <nav className="flex justify-center gap-6 mt-1 mb-4 text-[#444444] font-medium text-sm md:text-base">
          <a href="/" className="hover:text-blush-deep transition">SIMULATOR</a>
          <a href="#about" className="hover:text-blush-deep transition">ABOUT ME</a>
          <a
            href="https://github.com/Marichoii/BlushnBloom"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blush-deep transition"
          >
            PROJECT
          </a>
        </nav>

        {/* History */}
        <div className="mt-4 w-full">
          <SimulationHistory />
        </div>
      </div>
    </main>
  );
}
