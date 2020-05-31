export const guid = function () {
  function s4 () {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }

  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +  s4() + '-' + s4() + s4() + s4();
};

export const processAPIData = function (data) {
  let res = {};
  Object.keys(data).forEach((key) => { res[data[key].id] = data[key]; });
  return res;
};

export const sortObjects = (objects, key, reverse = false) => {
  let sortedKeys = Object.keys(objects).sort((a, b) => {
    if (reverse) return objects[b][key] - objects[a][key];
    return objects[a][key] - objects[b][key];
  });

  return sortedKeys.map((k) => {
    return objects[k];
  });
};
