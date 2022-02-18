const router = require('express').Router();
const helpers = require('./model');

router.get('/', (req, res, next) => {
    helpers.find()
      .then(project => {
        res.json(project)
      })
      .catch(next)
  })




module.exports = router;