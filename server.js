const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

const characters = [
  {
    routeName: "yoda",
    name: "Yoda",
    role: "Jedi Master",
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: "darthmaul",
    name: "Darth Maul",
    role: "Sith Lord",
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: "obiwankenobi",
    name: "Obi Wan Kenobi",
    role: "Jedi Master",
    age: 55,
    forcePoints: 1350
  }
];



app.listen(PORT, () => console.log(`Listening in on port ${PORT}`));

app.get('/api', (req, res) => {
  return res.json(characters);
});
