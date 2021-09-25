const express = require('express');
const path = require('path');
const app = express();
const port = 9001;
const axios = require('axios');

const setupWebSocket = require('./setupWebSocket');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log('path', __dirname);

app.use(express.static(path.join(__dirname, '../dist'))); //  "public" off of current is root

setupWebSocket(app, axios);

// app.listen(port, () => {
//   console.log(`Dynamic demo plugin app listening at http://localhost:${port}`);
// });
