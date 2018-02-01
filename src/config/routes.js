const express = require('express');
const BillingCycle = require('../api/billingCycle/bilingCycleService');

module.exports = function routerdifine(server) {
  // Set base URL for all routes
  const router = express.Router();
  server.use('/api', router);

  // Payment Cycle Routes
  BillingCycle.register(router, '/billingCycles');
};
