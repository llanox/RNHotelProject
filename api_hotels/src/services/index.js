const hotels = require('./hotels/hotels.service.js');
const hotelDetails = require('./hotel-details/hotel-details.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(hotels);
  app.configure(hotelDetails);
};
