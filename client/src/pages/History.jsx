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
        <img
          src="/src/assets/logo_blushnbloom.svg"
          alt="Blush’n Bloom Logo"
          className="block m-0 w-[75%] max-w-[400px]"
        />

        <nav className="flex justify-center gap-6 text-[#444444] font-medium text-sm md:text-base">
          {[
            { href: "/", text: "SIMULATOR" },
            { href: "#about", text: "ABOUT ME" },
            { href: "https://github.com/Marichoii/BlushnBloom", text: "PROJECT", external: true },
          ].map((item, idx) => (
            <a
              key={idx}
              href={item.href}
              target={item.external ? "_blank" : "_self"}
              rel={item.external ? "noopener noreferrer" : ""}
              className="relative text-[#444444] hover:text-blush-deep transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[2px]
                after:bg-blush-deep after:w-full after:scale-x-0 after:origin-center hover:after:scale-x-100
                after:transition-transform after:duration-300"
            >
              {item.text}
            </a>
          ))}
        </nav>

        <div className="mt-4 w-full">
          <SimulationHistory />
        </div>
      </div>
    </main>
  );
}
