const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static('public'));
// app.use(cors());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, () => console.log(`PROXY Server listening on ${PORT}`));