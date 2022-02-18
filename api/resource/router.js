const router = require('express').Router();
const helpers = require('./model');

router.get('/', (req, res, next) => {
    helpers.find()
      .then(resource => {
        res.json(resource)
      })
      .catch(next)
  })




module.exports = router;
