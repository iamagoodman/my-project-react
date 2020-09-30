import axios from 'axios';
const Loading = {
  loadingNum: 0,
  add(type = 'GET') {
    if (this.loadingNum === 0) {
      this.dispatch(true, type);
    }
    this.loadingNum++;
  },
  remove() {
    this.loadingNum = this.loadingNum - 1;
    if (this.loadingNum <= 0) {
      this.loadingNum = 0;
      this.dispatch(false);
    }
  },
  dispatch(loading) {
    if (loading) {
      //Vue.prototype.$toast.loading();
      console.log('loading');
    } else {
      //Vue.prototype.$toast.clear();
      console.log('stop loading');
    }
  }
};

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 0,
  withCredentials: true
});
instance.interceptors.request.use(
  config => {
    if (config.url.indexOf('#showLoading') > 0) {
      config.url = config.url.replace('#showLoading', '');
    } else {
      Loading.add(config.method && config.method.toUpperCase());
    }

    return config;
  },
  err => Promise.reject(err)
);

instance.interceptors.response.use(
  response => {
    if (response && response.config && response.config.url !== '/track/save') {
      Loading.remove();
    }

    return response;
  },
  error => {
    Loading.remove();
    return Promise.reject(error);
  }
);

const getFn = instance.get;

instance.get = (url, data = {}, config = {}) => {
  config.params = data;
  return getFn(url, config);
};

export default instance;
