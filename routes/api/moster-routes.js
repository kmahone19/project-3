const router = require('express').Router()

const { getMonsterByCR,
  getMonsterById,
  getMonsterByName,
  getMonsterBySize,
  getMonsterByType } = require("../../controllers/moster-controller");

router
  .route("/:cr")
  .get(getMonsterByCR);

router
  .route("/:id")
  .get(getMonsterById);

router
  .route("/:name")
  .get(getMonsterByName);

router
  .route("/:size")
  .get(getMonsterBySize);

router
  .route("/:Type")
  .get(getMonsterByType);

module.exports = router;