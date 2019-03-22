// Import dependencies
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const path = require('path');
const bodyParser = require('body-parser');
const cors =  require('cors');
require('dotenv').config();

// Import Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors());

app.use(express.static('build'));

// React routes
app.get('/*', (req,res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
});

// Start up the server
app.listen(PORT, () => {
  console.log(`Live on port ${PORT}. SHOW ME WHAT YOU GOT!`);
});
