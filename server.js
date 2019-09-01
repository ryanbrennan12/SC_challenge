const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', routes);

app.get('/', (req, res) => {
  res.send('Hey worlds');
});

app.listen(PORT, () => {
  console.log('Listening on port', PORT)
});








