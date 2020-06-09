import axios from 'axios';

const DEFAULT_API_CONFIG = {
  timeout: process.env.VUE_APP_TIMEOUT,
  headers: {
    Accept: 'application/json',
  },
};

export class Base {
  constructor(config = {}) {
    this.client = axios.create({
      ...DEFAULT_API_CONFIG,
      ...config,
    });
    this._addErrorInterceptor(this.client);
  }

  _addErrorInterceptor(client) {
    client.interceptors.response.use(
      res => res,
      error => {
        if (!error.response)
          throw Object.assign({ error_code: 700, message: 'Something went wrong!' });
        if (error.response && this.crashError(error)) throw error.response.data;
        if (error.response && this.unauthenticated(error)) throw error.response.data;
        if (error.response && this.recordNotFound(error)) throw error.response.data;
        if (error.response && this.unauthorizedError(error)) throw error.response.data;
        throw error.response.data;
      },
    );
  }

  unauthenticated(error) {
    if (error.response.data.error_code === 403) {
      // TODO SOMETHING
    }
  }

  recordNotFound(error) {
    if (error.response.data.error_code === 404) {
      // TODO SOMETHING
    }
  }
  unauthorizedError(error) {
    if (error.response.data.error_code === 403) {
      // TODO SOMETHING
    }
  }

  crashError(error) {
    if (error.response.status === 500) {
      // TODO SOMETHING
    }
  }
};
