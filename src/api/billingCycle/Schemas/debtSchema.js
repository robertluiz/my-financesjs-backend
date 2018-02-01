const restful = require('node-restful');
const constants = require('config/constants');

module.exports = new restful.mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  value: {
    type: Number,
    min: 0,
    required: true,
  },
  status: {
    type: String,
    required: false,
    uppercase: true,
    enum: constants.ENUM_PAYMENT,
  },
});
