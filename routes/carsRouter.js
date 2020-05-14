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

router.post('/', (req, res, next) => {
  // validate body
  carsModel.create(req.body)
    .then(result => {
      res.status(200).json({data: result})
    })
    .catch(err => {
      console.log("error:", err);
      res.status(500).json({ message: 'Unable to create car' })
    })
})

router.delete('/:id', (req, res, next) => {
  carsModel.remove(req.params.id)
    .then(result => {
      console.log('delete', result)
      res.status(200).json({message: `${result} records deleted`})
    })
})

module.exports = router;