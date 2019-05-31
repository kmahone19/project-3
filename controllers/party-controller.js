const { Party } = require('../models');
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
  const [partyErr, partyInfo] = await handle(Party.findOne({id: req.parmas.id}));

  if(partyErr){
    res.status(500).json(partyErr);
  } else {
    res.status(200).json(partyInfo)
  };
};

const updatePartyInfo = async (req, res, next) => {
  Party.update({
    party_name: req.body.party_name,
    party_lvl: req.body.party_lvl
  },
    {
    where: req.params.id
  })
  .then(rowsUpdated => releaseEvents.json(rowsUpdated)
  .catch(next)  
  )
}

module.exports = {
  newParty,
  getPartyInfo,
  updatePartyInfo
}