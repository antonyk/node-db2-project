const { Model } = require('objection');
const db = require('./dbContext');

class Car extends Model {
  static get tableName() {
    return 'cars';
  }
  static get jsonSchema() {

    return {
      type: 'object',
      required: ['vin', 'make', 'model', 'mileage'],
      properties: {
        id: { type: 'integer' },
        vin: { type: 'string', minLength: 17, maxLength: 17 },
        make: { type: 'string', minLength: 1, maxLength: 255 },
        model: { type: 'string', minLength: 1, maxLength: 255 },
        mileage: { type: 'number' },
        transmission: { type: 'string' },
        title: { type: 'string' }
      }
    }
  }
}

// const table = context('cars');

function getSet(filter) {
  if (filter) {
    throw 'not implemented';
  } else {
    return all();
  }
}
function getOne(id) {
  return db('cars').where({id}).first()
}
function all() {
  return db('cars');
}

function find() {}
function findById() {}

function create(data) {
  return db('cars').insert(data, 'id')
    .then(result => {
      console.log("insert: ", result)
      if (result && result.length>0)
        return getOne(result[0])
      else
        return null;
    })
}

function update(id, data) {
  return db('cars').update(data, 'id').where({id})
    .then(result => {
      if (result && result.length>0)
        return getOne(result[0])
      else
        return null;
    })
}

function remove(id) {
  return db('cars').where({id}).del();
}


module.exports = {
  Car,
  getSet,
  getOne,
  create,
  update,
  remove,
}