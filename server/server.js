const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '..', 'public');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

console.log(__dirname + '/../public');
console.log(publicPath);

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
})