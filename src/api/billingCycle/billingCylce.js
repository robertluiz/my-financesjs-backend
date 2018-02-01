const restful = require('node-restful');
const billingCycleSChema = require('./Schemas/billingCycleSchema');

module.exports = restful.model('BillingCycle', billingCycleSChema);
