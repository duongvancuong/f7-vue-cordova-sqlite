const getCurrentPosition = (config = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(function(position) {
      resolve(position);
    }, function(error) {
      reject(error);
    }, config);
  });
}

const watchPosition = (config = {}) => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.watchPosition(function(position) {
      resolve(position);
    }, function(error) {
      reject(error);
    }, config);
  });
}


const clearWatchPosition = watchID => navigator.geolocation.clearWatch(watchID);

export default {
  getCurrentPosition,
  watchPosition,
  clearWatchPosition,
};
