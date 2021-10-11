import Vue from 'vue'
// axios
import axios from 'axios'

const axiosIns = axios.create({
  // You can add your headers here
  // ================================
  baseURL: 'http://127.0.0.1:8000/api/',
  // baseURL: 'http://10.4.9.150/mlqasrv.php/api/',
  // timeout: 1000,
  // headers: {'X-Custom-Header': 'foobar'}
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${sessionStorage.getItem('token')}`,
  },
  withCredentials: false,
})

Vue.prototype.$http = axiosIns

export default axiosIns
