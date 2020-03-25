const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/', (req, res) => {
  res.sendStatus(200);
});

app.listen(PORT, console.log(`Server listening on ${PORT}`));