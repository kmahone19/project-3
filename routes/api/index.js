const router = require('express').Router();
const userRoutes = require('./user-routes');
const partyRoutes = require("./party-routes");
const monsterRoutes = require("./moster-routes")

router.use('/user', userRoutes);
router.use("/party", partyRoutes);
router.use("/monster", monsterRoutes);

module.exports = router;
