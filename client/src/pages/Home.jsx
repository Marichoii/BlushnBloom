import React, { useState } from 'react';
import SimulatorForm from '../features/simulator/SimulatorForm';
import SimulatorResult from '../features/simulator/SimulatorResult';
import SectionTitle from '../components/SectionTitle';
import SimulationHistory from '../features/simulator/SimulationHistory';

export default function Home() {
  const [result, setResult] = useState(null);

  return (
    <main className="min-h-screen bg-blush-pink text-gray-800 p-6 flex flex-col items-center">
      <div className="w-full max-w-lg space-y-8">
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
