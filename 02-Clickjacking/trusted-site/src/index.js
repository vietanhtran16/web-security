const express = require('express');
const app = express();
const path = require('path');

const port = 5000;

app.use((req, res, next) => {
  res.setHeader("X-Frame-Options", "DENY");
  next();
});

const STATIC_FOLDER = path.join(process.cwd(), "static");
app.use(express.static(STATIC_FOLDER));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
