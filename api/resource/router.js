const router = require('express').Router();
const helpers = require('./model');

router.get('/', (req, res, next) => {
    helpers.find()
      .then(resource => {
        res.json(resource)
      })
      .catch(next)
  })

router.post('/', (req, res, next) => {
  helpers.add(req.body)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch(next);
});


module.exports = router;
