import React, { useState } from 'react';
import SimulatorForm from '../features/simulator/SimulatorForm';
import SimulatorResult from '../features/simulator/SimulatorResult';
import SectionTitle from '../components/SectionTitle';
import SimulationHistory from '../features/simulator/SimulationHistory';

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <main className="min-h-screen bg-blush-pink text-gray-900 dark:text-white p-4 md:p-6 flex justify-center items-start">
      <div className="w-full max-w-lg bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-md">
        <SectionTitle text="Makeup Simulator" />
        <SimulatorForm onResult={setResult} />
        {result && (
          <div className="mt-6">
            <SimulatorResult result={result} />
          </div>
        )}
        <div className="mt-8">
          <SimulationHistory />
        </div>
      </div>
    </main>
  );
}
