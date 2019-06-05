const router = require('express').Router()

const { getMonsterById, getMonsterByName, getMonsterByCr } = require("../../controllers/moster-controller");

// /api/monsters?cr=""&id=""
router
  .route("/name/:Name")
  .get(getMonsterByName);

router
  .route("/cr/:Cr")
  .get(getMonsterByCr);


router
  .route("/id/:id")
  .get(getMonsterById);

module.exports = router;