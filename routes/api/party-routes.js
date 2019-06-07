const router = require('express').Router()
const withAuth = require('../../middleware/authentication');

const { getPartyInfo, newParty, deletePartyInfo } = require("../../controllers/party-controller");

router
  .route("/")
  .get(withAuth, getPartyInfo);

router
  .route("/register")
  .post(withAuth, newParty);

router
  .route("/delete/:id")
  .delete(withAuth, deletePartyInfo)

module.exports = router;