const express = require('express');
const connectDB = require('./db/connet');
const errorHandlerMiddleware = require('./Middleware/error-handler');
const notFound = require('./Middleware/not-found');
require('dotenv').config();
require('express-async-errors');
const app = express();

//middleware
app.use(express.static('./public'));
app.use(express.json());

app.use(errorHandlerMiddleware);
app.use(notFound);
app.get('/', (req, res) => {
  res.status(200).json({ msg: 'this is an api' });
});

const Port = process.env.PORT || 3003;
const start = async () => {
  try {
    //connectDB
    await connectDB(process.env.MONGO_URI);
    app.listen(Port, console.log(`app is listening on port ${Port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
