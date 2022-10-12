function getRandomPositiveInt (min, max) {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;

  if (min < 0 || max < 0 || max <= min ) {
    return NaN;
  }

  return Math.floor(result);
}
getRandomPositiveInt(1, 10);

function getRandomPositiveFloat (min, max, digits = 1) {
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  const result = Math.random * (upper - lower) + lower;

  if (min < 0 || max < 0 || max <= min || digits < 0) {
    return NaN;
  }

  return +result.toFixed(digits);
}

getRandomPositiveFloat(1, 2, 2);
