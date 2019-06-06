const router = require('express').Router()
const withAuth = require('../../middleware/authentication');

const { getPartyInfo, newParty, updatePartyInfo } = require("../../controllers/party-controller");

router
  .route("/")
  .get(withAuth, getPartyInfo);

router
  .route("/register")
  .post(newParty, withAuth);

router
  .route("/update/:id")
  .put(updatePartyInfo, withAuth)

module.exports = router;