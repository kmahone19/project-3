const router = require('express').Router()
const withAuth = require('../../middleware/authentication');

const { getPartyInfo, newParty } = require("../../controllers/party-controller");

router
  .route("/")
  .get(withAuth, getPartyInfo);

router 
  .route("/register")
  .post(newParty)

module.exports = router;