const { monsters } = require('../models');

// req.query => {id : 1} or {cr: ""}
const getMonster = (req, res) => {
  monsters.findAll({
    where: req.query
  })
  .then(monsterData => res.json(monsterData))
  .catch(err => res.json(err))
};

const getMonsterById = (req, res) => {
  monsters.findAll({
    where: {
      id: req.parmas.id
    }
  })
  .then(monsterData => res.json(monsterData));
  .catch(err => res.json(err));
};

module.exports = {
  getMonsterById,
  getMonster
}
