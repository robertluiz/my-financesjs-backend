import restful from 'node-restful';
import billingCycleSChema from './Schemas/billingCycleSchema';

const billingCylce = restful.model('BillingCycle', billingCycleSChema);

export default billingCylce;
