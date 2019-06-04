const { Monsters } = require('../models');

// req.query => {id : 1} or {cr: ""}
const getMonster = (req, res) => {
  Monsters.findAll({
    where: req.query
  })
  .then(monsterData => res.json(monsterData))
  .catch(err => res.json(err))
};

const getMonsterById = (req, res) => {
  Monsters.findAll({
    where: {
      id: req.params.id
    }
  })
  .then(monsterData => res.json(monsterData))
  .catch(err => res.json(err));
};

module.exports = {
  getMonsterById,
  getMonster
}
