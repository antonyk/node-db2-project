
const { Model } = require('objection');

class Car extends Model {
  static get tableName() {
    return 'car';
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
