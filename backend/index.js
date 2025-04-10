const express = require('express');
const app = express();
const PORT = 5000;
const cors = require('cors');

app.use(cors());

const quotes = [
  "La simplicité est la sophistication suprême.",
  "Le code est comme l'humour. Quand tu dois l'expliquer, c’est qu’il n’est pas bon.",
  "Il faut viser la lune, parce qu’au moins si tu échoues, tu atterris dans les étoiles."
];

app.get('/quotes', (req, res) => {
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  res.json({ quote: randomQuote });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
