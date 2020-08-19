const express = require('express');
const app = express();
const path = require('path');
const port = 8000;

app.get('/', (req, res) => {
  const cspHeader = "default-src 'self'; style-src example1.com:5000; script-src style-src example1.com:5000";
  res.setHeader('Content-Security-Policy', cspHeader);
  res.sendFile(path.join(__dirname, 'html', 'index.html'));
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})