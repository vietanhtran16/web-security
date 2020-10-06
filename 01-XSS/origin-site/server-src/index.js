const express = require('express');
const app = express();
const path = require('path');
const crypto = require('crypto');
const { readFile } = require('fs');

const port = 8000;
const DIST_FOLDER = path.join(process.cwd(), "build");

app.use((_, res, next) => {
  res.setHeader("Set-Cookie", "name=Viet")
  next();
})

app.use((_, res, next) => {
  const nonce = crypto.randomBytes(16).toString('base64');
  res.nonce = nonce;
  res.setHeader("Content-Security-Policy", `default-src 'self'; script-src 'self' 'nonce-${nonce}'; style-src 'self' 'unsafe-inline'`);
  next();
});

app.get("/", async (_, res) => {
  readFile(path.join(DIST_FOLDER, "index.html"), (error, indexFile) => {
    if(error) {
      res.sendStatus(500);
    } else {
      const indexWithUpdatedNonce = indexFile.toString().split("${NONCE}").join(res.nonce);
      res.send(indexWithUpdatedNonce);
    }
  });
});

app.use(express.static(DIST_FOLDER));

app.get('/search', (req, res) => {
  res.status(200).send(req.query.key);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
