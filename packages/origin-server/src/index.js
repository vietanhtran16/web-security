const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  // const cspHeader = "default-src 'self'; style-src example1.com:5000; script-src example1.com:5000";
  // res.setHeader('Content-Security-Policy', cspHeader);
  res.setHeader("Set-Cookie", "name=viet")
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
})

app.post('/hello', (req, res) => {
  res.status(201).send(req.body.name);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})