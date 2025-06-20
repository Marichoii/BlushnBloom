document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('simulatorForm');
  const suggestionsDiv = document.getElementById('suggestions');

  const occasionTips = {
    casual: {
      title: "Casual Look",
      text: "Go for a fresh and minimal look with a natural base, soft blush, and nude lips. Ideal for errands, brunch, or a walk in the park."
    },
    formal: {
      title: "Formal Look",
      text: "Opt for a flawless matte foundation, well-defined brows, classic eyeliner, and rose or burgundy lipstick. Perfect for interviews and business meetings."
    },
    party: {
      title: "Party Look",
      text: "Embrace shimmer eyeshadows, bold lips, and highlighter for a radiant glow. Go dramatic with lashes or a vibrant cat eye."
    },
    wedding: {
      title: "Wedding Look",
      text: "Soft romantic tones like peach, rose gold, and warm neutrals. Focus on glow, elegance, and long-lasting products."
    },
    other: {
      title: "Everyday Versatile Look",
      text: "Comfortable and polished. Tinted moisturizer, light cream blush, subtle mascara, and MLBB lipstick work beautifully."
    }
  };

  const paletteTips = {
    "spring-warm": "Use warm peach, coral, light gold, and apricot shades. Glowy finishes look stunning on you.",
    "spring-cool": "Pinks, cool corals, mint green, and fresh sky tones match your brightness.",
    "summer-light": "Soft pastels like lilac, rose, sky blue, and mauve suit your airy elegance.",
    "summer-cool": "Cool tones like dusty rose, blue-grey, and lavender complement your refined tones.",
    "autumn-warm": "Embrace copper, burnt orange, terracotta, olive, and warm browns for depth.",
    "autumn-deep": "Dark chocolate, burgundy, mustard, and forest green create a rich, bold look.",
    "winter-cool": "Icy pink, sapphire, silver, and contrasty tones enhance your dramatic contrast.",
    "winter-deep": "Plum, navy, emerald, and bold red are your power shades.",
    "custom": "Mix tones that reflect your creativity and personality — you're free to explore!"
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const occasion = document.getElementById('occasion').value;
    const palette = document.getElementById('colorPalettes').value;
    const skinTone = document.getElementById('skinTone').value;

    const occasionData = occasionTips[occasion];
    const paletteText = paletteTips[palette] || "Choose a palette that matches your unique features.";

    suggestionsDiv.innerHTML = `
      <h3>Personalized Makeup Tips</h3>
      <p><strong>Occasion:</strong> ${occasionData?.title || 'N/A'}</p>
      <p>${occasionData?.text || 'Select a valid occasion to get tips.'}</p>
      <p><strong>Recommended Palette:</strong> ${paletteText}</p>
      <p><strong>Skin Tone:</strong> ${skinTone.charAt(0).toUpperCase() + skinTone.slice(1)}</p>
    `;
  });
});
