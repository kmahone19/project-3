const { party } = require('../models');
const handle = require('../utils/promise-handler');

const newParty = (req,res) => {
  console.log(req.body);

  const { party_name, party_lvl } = req.body;

  Party.create({
    party_name,
    party_lvl
  })
  .then(dbPartydata => res.json(dbPartydata))
  .catch(err => {
    console.log(err);
    res.json(err);
  });
};

const getPartyInfo = async (req,res) => {
  const [partyErr, partyInfo] = await handle(Party.findOne({id: req.id}));

  if(partyErr){
    res.status(500).json(partyErr);
  } else {
    res.status(200).json(partyInfo)
  }
}

module.exports = {
  newParty,
  getPartyInfo
}