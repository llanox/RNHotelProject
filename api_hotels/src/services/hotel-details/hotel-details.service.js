// Initializes the `hotelDetails` service on path `/hotel-details`
const createService = require('feathers-nedb');
const createModel = require('../../models/hotel-details.model');
const hooks = require('./hotel-details.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'hotel-details',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/hotel-details', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hotel-details');

  service.hooks(hooks);
};
