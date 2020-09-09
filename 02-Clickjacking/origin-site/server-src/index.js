const express = require('express');
const app = express();
const path = require('path');

const port = 8000;
const DIST_FOLDER = path.join(process.cwd(), "build");

app.use(express.static(DIST_FOLDER));

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
