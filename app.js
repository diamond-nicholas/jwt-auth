const express = require('express');
const connectDB = require('./db/connet');
require('dotenv').config();
const app = express();

//

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
