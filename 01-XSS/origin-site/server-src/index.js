const express = require('express');
const app = express();
const path = require('path');

const port = 8000;
const DIST_FOLDER = path.join(process.cwd(), "build");

app.use((req, res, next) => {
  res.setHeader("Set-Cookie", "name=Viet")
  next();
})

app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'; style-src 'self' 'unsafe-inline'");
  next();
});

app.use(express.static(DIST_FOLDER));

app.get('/search', (req, res) => {
  res.status(200).send(req.query.key);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
