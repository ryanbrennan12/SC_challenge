const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));

app.use('/api', routes);

app.listen(port, () => console.log(`We are running on port ${port}!!! 🚀`));