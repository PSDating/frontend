const validateParameter = (parameter, name) => {
  if (isNaN(parameter)) {
    return `${name} must be a natural number.`;
  }

  if (parameter === 0) {
    return `${name} cannot be zero.`;
  }

  if (parameter < 0) {
    return `${name} must be positive.`;
  }

  return null;
};

const validateParameters = ({ capacity, weights, values }) => {
  let error;
  let i;

  error = validateParameter(capacity, "Capacity");
  if (error) {
    return error;
  }

  for (i = 0; i < weights.length; i++) {
    error = validateParameter(weights[i], `Weight ${i + 1}`);
    if (error) {
      return error;
    }
  }

  for (i = 0; i < values.length; i++) {
    error = validateParameter(values[i], `Value ${i + 1}`);
    if (error) {
      return error;
    }
  }

  return null;
};

export default validateParameters;
