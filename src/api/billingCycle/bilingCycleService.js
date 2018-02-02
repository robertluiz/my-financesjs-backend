import BillingCycle from './billingCylce';
import constants from '../../config/constants';

BillingCycle.methods(constants.HTTP_METHODS);
BillingCycle.updateOptions({ new: true, runValidators: true });

export default BillingCycle;
