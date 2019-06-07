const { Party } = require('../models');

const newParty = (req, res) => {
  console.log(req.body);

  const { party_name, party_lvl } = req.body;

  Party.create({
    party_name,
    party_lvl,
    UserId: req.id
  })
    .then(dbPartydata => res.json(dbPartydata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

const getPartyInfo = (req, res) => {

  Party.findAll({
    where: {
      UserId: req.id
    }
  })
    .then(dbPartydata => res.json(dbPartydata))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
};

const deletePartyInfo = async (req, res) => {
  Party.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(partyData => res.json(partyData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
}

module.exports = {
  newParty,
  getPartyInfo,
  deletePartyInfo
}