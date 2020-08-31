const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  // const cspHeader = "default-src 'self'; style-src example1.com:5000; script-src example1.com:5000";
  // res.setHeader('Content-Security-Policy', cspHeader);
  res.setHeader("Set-Cookie", "name=viet");
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
});

app.get('/search', (req, res) => {
  console.log("req.query", req.query.item);
  const cspHeader = "default-src 'self'";
  res.setHeader('Content-Security-Policy', cspHeader);
  res.status(400).send(req.query.item);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
