const login = async (req, res) => {
  res.send('Fake Login/Register/SignUp');
};

const dashboard = async (req, res) => {
  const luckyNumber = Math.floor(Math.random * 100);
  res
    .status(200)
    .json({ msg: `Hello there ${luckyNumber} is your secret number` });
};

module.exports = {
  login,
  dashboard,
};
