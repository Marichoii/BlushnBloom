import React, { useState } from 'react';
import SimulatorForm from '../features/simulator/SimulatorForm';
import SimulatorResult from '../features/simulator/SimulatorResult';
import SectionTitle from '../components/SectionTitle';

export default function Home() {
    const [result, setResult] = useState(null);

    return (
        <main className="min-h-screen bg-gradient-to-b from-pink-50 via-white to-pink-100 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-white p-6">
            <div className="max-w-2xl mx-auto">
                <SectionTitle text="Makeup Simulator" />
                <SimulatorForm onResult={setResult} />
                <div className="mt-8">
                    <SimulatorResult result={result} />
                </div>
            </div>
        </main>
    );
}
