const toSnakeCase = string => string.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const isArray = arr => Array.isArray(arr);
const isObject = obj => obj === Object(obj) && !isArray(obj) && typeof obj !== 'function';

const keysToSnakeCase = obj => {
  if (isObject(obj)) {
    const n = {};

    Object.keys(obj)
      .forEach(k => {
        n[toSnakeCase(k)] = keysToSnakeCase(obj[k]);
      });

    return n;
  } else if (isArray(obj)) {
    return obj.map(i => keysToSnakeCase(i));
  }

  return obj;
};

export default keysToSnakeCase;

