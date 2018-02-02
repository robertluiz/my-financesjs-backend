import restful from 'node-restful';
import constants from '../../../config/constants';

const debtSchema = new restful.mongoose.Schema({
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

export default debtSchema;
