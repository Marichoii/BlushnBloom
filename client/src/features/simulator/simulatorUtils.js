export function getRecommendations({ event, skinTone, undertone, eyeColor, hairColor }) {
  const base = skinTone === 'Light' ? 'Ivory' : skinTone === 'Medium' ? 'Beige' : 'Espresso';
  const style = event === 'Party' ? 'Glam' : event === 'Interview' ? 'Classic' : 'Natural';
  const palette = undertone === 'Warm' ? ['Gold', 'Peach'] : undertone === 'Cool' ? ['Pink', 'Wine'] : ['Nude', 'Brown'];

  return {
    base,
    style,
    palette,
    eyeshadow: eyeColor === 'Green' ? 'Copper' : 'Warm Brown',
    lipstick: hairColor === 'Redhead' ? 'Coral' : 'Nude',
  };
}
