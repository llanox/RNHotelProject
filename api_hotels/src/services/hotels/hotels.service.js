// Initializes the `hotels` service on path `/hotels`
const createService = require('feathers-nedb');
const createModel = require('../../models/hotels.model');
const hooks = require('./hotels.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'hotels',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/hotels', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('hotels');

  service.hooks(hooks);
};
