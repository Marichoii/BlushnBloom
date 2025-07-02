import React, { useState } from 'react';
import SimulatorForm from '../features/simulator/SimulatorForm';
import SimulatorResult from '../features/simulator/SimulatorResult';
import SimulationHistory from '../features/simulator/SimulationHistory';

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <main className="relative min-h-screen bg-blush-pink text-gray-800 p-6 flex flex-col items-center">
      <div
        className="absolute top-0 left-0 w-full h-[60px] bg-top bg-repeat-x z-0 pointer-events-none select-none"
        style={{
          backgroundImage: "url('/src/assets/background_bb.svg')",
          backgroundSize: '800px auto' // Ajuste para o tamanho desejado da renda
        }}
      ></div>


      <div className="relative z-10 w-full max-w-lg">
        <img
          src="/src/assets/logo_blushnbloom.svg"
          alt="Blush’n Bloom Logo"
          className="w-[80%] max-w-[400px] mx-auto mb-0"
        />
        <SimulatorForm onResult={setResult} />
        {result && (
          <div className="mt-4">
            <SimulatorResult result={result} />
          </div>
        )}
        <div className="mt-4">
          <SimulationHistory />
        </div>
      </div>
    </main>
  );
}
