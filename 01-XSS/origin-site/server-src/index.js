const express = require('express');
const app = express();
const path = require('path');

const port = 8000;
const DIST_FOLDER = path.join(process.cwd(), "build");
console.log("DIST_FOLDER", DIST_FOLDER);
app.use(express.static(DIST_FOLDER));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.get('/search', (req, res) => {
  res.status(200).send(req.query.key);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
