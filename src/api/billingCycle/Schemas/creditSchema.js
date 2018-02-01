const restful = require('node-restful');

module.exports = new restful.mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
});
