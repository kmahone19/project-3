const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.json({
    message: "404 Page not found, turn back now!"
  })
});

module.exports = router;
