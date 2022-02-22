const app = require('express')();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');

// MIDDLEWARES
app.use(bodyParser.json());
app.use(cors());

// IMPORT ROUTES
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);

// HOME
app.get('/', (req, res) => {
  app.send('You are on home, hit /posts for endpoint');
});

// MONGO
mongoose.connect(process.env.DB_CONNECT, () => console.log(`Connected to DB!`));

// LAUNCH
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Up on Port: http://localhost:${port}`);
});
