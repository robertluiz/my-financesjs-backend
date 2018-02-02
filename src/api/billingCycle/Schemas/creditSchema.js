import restful from 'node-restful';

const creditSchema = new restful.mongoose.Schema({
  name: { type: String, required: true },
  value: { type: Number, min: 0, required: true },
});

export default creditSchema;
