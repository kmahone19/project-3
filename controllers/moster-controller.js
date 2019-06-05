const { Monsters } = require('../models');
var Sequelize = require("sequelize");
const Op = Sequelize.Op;


const getMonsterByName = (req, res) => {
  Monsters.findAll({
    where: {
      Name: {
        [Op.like]: req.params.Name
      }
    }
  })
  .then(monsterData => res.json(monsterData))
  .catch(err => res.json(err))
};

const getMonsterByCr = (req, res) => {
  Monsters.findAll({
    where: {
      CR: req.params.Cr
    }
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
  getMonsterByName,
  getMonsterByCr
}
