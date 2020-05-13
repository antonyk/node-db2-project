const { Model } = require('objection');
const context = require('./dbContext');

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

const table = context('cars');

function getSet(filter) {
  if (filter) {
    throw 'not implemented';
  } else {
    return all();
  }
}
function getOne() {}
function all() {
  return table;
}
function find() {}
function findById() {}
function create() {}
function update() {}
function remove() {}


module.exports = {
  Car,
  getSet,
  getOne,
  create,
  update,
  remove,
}