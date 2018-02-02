import express from 'express';
import BillingCycle from '../api/billingCycle/bilingCycleService';

const routes = function routerdifine(server) {
  // Set base URL for all routes
  const router = express.Router();
  server.use('/api', router);

  // Payment Cycle Routes
  BillingCycle.register(router, '/billingCycles');
};

export default routes;
