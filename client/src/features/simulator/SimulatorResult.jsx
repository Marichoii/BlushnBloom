import React from 'react';
import ColorSwatch from '../../components/ColorSwatch';

export default function SimulatorResult({ result }) {
  if (!result) return null;

  return (
    <div className="p-4 rounded bg-pink-50 dark:bg-pink-900">
      <h2 className="text-lg font-bold mb-2">Resultado da Simulação</h2>
      <p><strong>Base:</strong> {result.base}</p>
      <p><strong>Estilo:</strong> {result.style}</p>
      <p><strong>Sombras:</strong> {result.eyeshadow}</p>
      <p><strong>Batom:</strong> {result.lipstick}</p>
      <div className="flex gap-2 mt-2">
        {result.palette.map((color, i) => <ColorSwatch key={i} colorName={color} />)}
      </div>
    </div>
  );
}
