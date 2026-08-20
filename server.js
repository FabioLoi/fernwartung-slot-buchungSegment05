const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

let board = {
  session: null,
  requests: []
};

app.use(express.json());
app.use(express.static(path.join(__dirname)));

app.get('/api/board', (req, res) => {
  res.json(board);
});

app.post('/api/board', (req, res) => {
  const { session, requests } = req.body || {};

  board = {
    session: session || null,
    requests: Array.isArray(requests) ? requests : []
  };

  res.json(board);
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});
