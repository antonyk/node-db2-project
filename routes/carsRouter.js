const router = require('express').Router();
const carsModel = require('../data/carsModel');


router.get('/', (req, res, next) => {
  // check for filters
  carsModel.getSet()
    .then(cars => {
      res.status(200).json({ data: cars })
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to get cars' })
    })
})

router.get('/:id', (req, res, next) => {
  // check for filters
  carsModel.getSet(req.params.id)
    .then(cars => {
      res.status(200).json({ data: cars })
    })
    .catch(err => {
      res.status(500).json({ message: 'Unable to get cars' })
    })
})

module.exports = router;