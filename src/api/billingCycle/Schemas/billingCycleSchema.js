import restful from 'node-restful';
import creditSchema from './creditSchema';
import debtSchema from './debtSchema';

const billingCycleSchema = new restful.mongoose.Schema({
  name: { type: String, required: true },
  month: {
    type: Number, min: 1, max: 12, required: true,
  },
  year: {
    type: Number, min: 1970, max: 2100, required: true,
  },
  credits: [creditSchema],
  debts: [debtSchema],
});

export default billingCycleSchema;
