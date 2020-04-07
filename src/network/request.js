import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL:'http://152.136.185.210:8000/api/h8/',
    timeout:5000
  })
  /*请求拦截器*/
  instance.interceptors.request.use(config => {
    /*要做的事情*/
    return config
  },err => {

  })
  /*响应拦截器*/
  instance.interceptors.response.use(res => {
    /*要做的事情*/
    return res.data
  },err => {

  })
  return instance(config)
}
