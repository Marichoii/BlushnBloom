import React from 'react';
import ColorSwatch from '../../components/ColorSwatch';

export default function SimulatorResult({ result }) {
  if (!result) return null;

  return (
    <div className="mt-10 w-full max-w-lg">
      <h2 className="text-2xl font-fancy text-blush-deep mb-4 text-center">Simulation History</h2>
      <ul className="space-y-4">
        {history.map((sim, idx) => (
          <li
            key={idx}
            className="p-5 bg-white rounded-2xl shadow-md border border-blush-accent text-center transition hover:shadow-lg"
          >
            <p className="text-gray-800"><strong>Event:</strong> {sim?.form?.event || "?"}</p>
            <p className="text-gray-800"><strong>Skin:</strong> {sim?.form?.skinTone || "?"}</p>
            <p className="text-gray-800"><strong>Result:</strong> {sim?.result?.base || "?"}, {sim?.result?.style || "?"}</p>
          </li>
        ))}
      </ul>
    </div>

  );
}
