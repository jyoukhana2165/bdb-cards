const express = require('express');

const app = express();

const port = process.env.port || 8080;
const version = process.env.IMAGE_VERSION;

const distDir = "dist";

app.set('etag', false);

app.use(express.json());

app.get('/version', (req, res) => {
    res.end(JSON.stringify({ Version: version }));
});

app.use('/', express.static(distDir));
app.use('/products', express.static(distDir));
app.use('/aboutus', express.static(distDir));
app.use('/contactus', express.static(distDir));

app.listen(port, () => {
    console.log(`Server listening on: http://localhost:${port}`);
});
