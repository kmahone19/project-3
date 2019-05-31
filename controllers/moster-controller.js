const { monsters } = require('../models');


const getMonsterByName = (req, res) => {
  monsters.findAll({
    where: {
      Name: req.params.name
    }
  })
};

const getMonsterBySize = (req, res) => {
  monsters.findAll({
    where: {
      Size: req.parmas.size
    }
  })
};

const getMonsterByCR = (req, res) => {
  monsters.findAll({
    where: {
      CR: req.params.cr
    }
  })
};

const getMonsterById = (req, res) => {
  monsters.findAll({
    where: {
      id: req.parmas.id
    }
  })
};


const getMonsterByType = (req, res) => {
  monsters.findAll({
    where: {
      Type: req.params.type
    }
  })
};

module.exports = {
  getMonsterByCR,
  getMonsterById,
  getMonsterByName,
  getMonsterBySize,
  getMonsterByType
}
