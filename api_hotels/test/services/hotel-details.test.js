const assert = require('assert');
const app = require('../../src/app');

describe('\'hotelDetails\' service', () => {
  it('registered the service', () => {
    const service = app.service('hotel-details');

    assert.ok(service, 'Registered the service');
  });
});
