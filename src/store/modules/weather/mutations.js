export default {
  ADD_CURRENT_WEATHER: (state, { status, data }) => {
    console.log("-----COMMIT ADD_CURRENT_WEATHER------");
    state.status = status;
    if (!!data) state.data = data;
    console.log("-----END COMMIT ADD_CURRENT_WEATHER------");
  },
};

