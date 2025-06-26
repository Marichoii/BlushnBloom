fetch('http://localhost:3001/api/simulate', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ form, result }),
});
