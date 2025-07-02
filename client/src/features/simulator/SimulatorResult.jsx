import React from 'react';
import ColorSwatch from '../../components/ColorSwatch';

export default function SimulatorResult({ result }) {
  if (!result) return null;

  return (
    <div className="p-4 rounded-xl bg-white/70 backdrop-blur shadow text-center">
      <h2 className="text-lg font-bold text-pink-700 mb-2">Simulation Result</h2>
      <p className="text-gray-700"><strong>Base:</strong> {result.base}</p>
      <p className="text-gray-700"><strong>Style:</strong> {result.style}</p>
      <p className="text-gray-700"><strong>Eyeshadow:</strong> {result.eyeshadow}</p>
      <p className="text-gray-700"><strong>Lipstick:</strong> {result.lipstick}</p>
      <div className="flex justify-center gap-2 mt-3">
        {result.palette.map((color, i) => (
          <ColorSwatch key={i} colorName={color} />
        ))}
      </div>
    </div>
  );
}
