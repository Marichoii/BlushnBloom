document.getElementById('simulatorForm').addEventListener('submit', function (event) {
    event.preventDefault();
    const occasion = document.getElementById('occasion').value;
    const suggestions = document.getElementById('suggestions');

    suggestions.innerHTML = '';

    let suggestionText;
    switch (occasion) {
        case 'casual':
            suggestionText = 'For a casual look, try a light foundation, a hint of blush, and a nude lip.';
            break;
        case 'formal':
            suggestionText = 'For formal events, opt for a full coverage foundation, smoky eyes, and bold red lips.';
            break;
        case 'party':
            suggestionText = 'For parties, go for glittery eyeshadow, false lashes, and a vibrant lip color.';
            break;
        case 'wedding':
            suggestionText = 'For weddings, consider soft pastels, dewy skin, and a classic red lip.';
            break;
        default:
            suggestionText = 'Explore various makeup styles to find your perfect look!';
    }

    suggestions.innerHTML = `<p>${suggestionText}</p>`;

});