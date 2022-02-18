const router = require('express').Router();
const helpers = require('./model');

router.get('/', (req, res, next) => {
    helpers.find()
      .then(task => {
        res.json(task)
      })
      .catch(next)
  })




module.exports = router;
