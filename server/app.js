const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/ping', (req, res) => {
  res.send({ ping: `was ponged with: ${JSON.stringify(req.body)}` });
});

module.exports = app;
