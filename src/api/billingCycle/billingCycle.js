import restful from 'node-restful';
import billingCycleSChema from './Schemas/billingCycleSchema';

const billingCycle = restful.model('BillingCycle', billingCycleSChema);

export default billingCycle;
