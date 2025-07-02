import React, { useState } from 'react';
import SimulatorForm from '../features/simulator/SimulatorForm';
import SimulatorResult from '../features/simulator/SimulatorResult';
import SimulationHistory from '../features/simulator/SimulationHistory';

export default function Home() {
  const [result, setResult] = useState(null);

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
        <img
          src="/src/assets/logo_blushnbloom.svg"
          alt="Blush’n Bloom Logo"
          className="w-[75%] max-w-[400px]"
        />

        <nav className="flex justify-center gap-6 mt-1 mb-4 text-[#444444] font-medium text-sm md:text-base">
          <a href="/favorites" className="hover:text-blush-deep transition">FAVORITES</a>
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

        <SimulatorForm onResult={setResult} />

        {result && (
          <div className="mt-4 w-full">
            <SimulatorResult result={result} />
          </div>
        )}

        <div className="mt-4 w-full">
          <SimulationHistory />
        </div>

        <section id="about" className="mt-12 text-center px-4">
          <h2 className="text-2xl font-fancy text-blush-deep mb-4">ABOUT ME</h2>
          <p className="max-w-md mx-auto text-gray-700 text-base leading-relaxed">
            Hello! I’m Mari, a computer science student and frontend developer passionate about building elegant and functional web projects. Blush’n Bloom was created to showcase clean UI design and to help makeup enthusiasts plan their styles. Let’s build beautiful things together!
          </p>
        </section>
      </div>
    </main>
  );
}
