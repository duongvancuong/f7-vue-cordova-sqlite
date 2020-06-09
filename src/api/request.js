import axios from 'axios';
import typeError from '../constant';

import { getToken } from './auth';

import camelcaseKeys from '../utils/camelcaseKeys';
import snakeCaseKeys from '../utils/snakeCaseKeys';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 20000,
});

function unauthenticated(error) {
  if (error.response.data.error_code === typeError.UNAUTHENTICATED) {
    // TODO SOMETHING
  }
}

function recordNotFound(error) {
  if (error.response.data.error_code === typeError.RECORD_NOT_FOUND) {
    // TODO SOMETHING
  }
}

function unauthorizedError(error) {
  if (error.response.data.error_code === typeError.UNAUTHENTICATED) {
    // TODO SOMETHING
  }
}

function badRequest(error) {
  if (error.response.data.error_code === typeError.BAD_REQUEST) {
    // TODO SOMETHING
  }
}

function crashError(error) {
  if (error.response.status === typeError.CRASH_ERROR) {
    // TODO SOMETHING
  }
}

service.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    config.headers['Access-Control-Allow-Origin'] = '*';

    return config;
  },
  error => {
    Promise.reject(error);
  }
);

service.interceptors.response.use(
  response => {
    if (response.data) {
      window.$eventBus.$emit('isBrokenNetwork', false);
      return camelcaseKeys(response.data);
    }
    return response;
  },
  error => {
    window.$eventBus.$emit('isBrokenNetwork', true);
    if (!error.response) throw Object.assign({ error_code: typeError.REQUEST_ERROR, message: 'Something went wrong!' });
    if (error.response && crashError(error)) throw error.response.data;
    if (error.response && badRequest(error)) throw error.response.data;
    if (error.response && unauthenticated(error)) throw error.response.data;
    if (error.response && recordNotFound(error)) throw error.response.data;
    if (error.response && unauthorizedError(error)) throw error.response.data;

    throw error.response.data;
    // return Promise.reject(error);
  },
);

export default service;
