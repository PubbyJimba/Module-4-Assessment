// let goals = [];

module.exports = {
  getCompliment: (req, res) => {
    const compliments = [
      "Gee, you're a smart cookie!",
      "Cool shirt!",
      "Your Javascript skills are stellar.",
    ];

    // choose random compliment
    let randomIndex = Math.floor(Math.random() * compliments.length);
    let randomCompliment = compliments[randomIndex];

    res.status(200).send(randomCompliment);
  },
  getFortune: (req, res) => {
    const fortunes = [
      "A soft voice may be awfully persuasive.",
      "Advice, when most needed, is least heeded.",
      "At the touch of love, everyone becomes a poet.",
      "Believe in yourself and others will too.",
      "Believe it can be done.",
    ];

    let randomIndex = Math.floor(Math.random() * fortunes.length);
    let randomFortune = fortunes[randomIndex];

    res.status(200).send(randomFortune);
  },
  postGoal: (req, res) => {
    const { inputValue } = req.body;
    // goals.push(inputValue);
    res.status(200).send(inputValue);
  }
};
