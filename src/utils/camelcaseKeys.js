const toCamel = key => key.replace(/([-_][a-z])/ig, $1 => $1.toUpperCase()
  .replace('-', '')
  .replace('_', ''));

const isArray = arr => Array.isArray(arr);

const isObject = obj => obj === Object(obj) && !isArray(obj) && typeof obj !== 'function';

const keysToCamel = obj => {
  if (isObject(obj)) {
    const n = {};

    Object.keys(obj)
      .forEach(k => {
        n[toCamel(k)] = keysToCamel(obj[k]);
      });

    return n;
  } else if (isArray(obj)) {
    return obj.map(i => keysToCamel(i));
  }

  return obj;
};

export default keysToCamel;

