const BillingCycle = require('./billingCylce');
const constants = require('config/constants');

BillingCycle.methods(constants.HTTP_METHODS);
BillingCycle.updateOptions({ new: true, runValidators: true });

module.exports = BillingCycle;
