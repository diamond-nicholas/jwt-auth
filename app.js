const express = require('express');
const app = express();

//

app.get('/', (req, res) => {
  res.status(200).json({ msg: 'this is an api' });
});

const Port = process.env.PORT || 3003;
const start = () => {
  try {
    //connectDB
    app.listen(Port, console.log(`app is listening on port ${Port}`));
  } catch (error) {
    console.log(error);
  }
};

start();
