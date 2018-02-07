import _ from 'lodash';

const parseErrors = (nodeRestfulErrors) => {
  const errors = [];
  _.forIn(nodeRestfulErrors, error => errors.push(error.message));
  return errors;
};

const erroHandler = (req, res, next) => {
  const bundle = res.locals.bundle.errors;
  if (bundle) {
    const errors = parseErrors(bundle);
    res.status(500).json({ errors });
  } else {
    next();
  }
};

export default erroHandler;
