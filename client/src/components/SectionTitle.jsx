import React from 'react';

export default function SectionTitle({ text }) {
  return (
    <h1 className="text-3xl font-fancy text-blush-deep mb-6 text-center tracking-wide">
      {text}
    </h1>
  );
}