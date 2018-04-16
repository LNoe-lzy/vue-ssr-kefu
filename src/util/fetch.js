/* eslint-disable */
import axios from 'axios'
import { baseURL } from '../config/config'

axios.defaults.baseURL = baseURL

function fetch (url, Data, method = 'GET') {
  const data = method === 'POST' ? Data : {}
  const params = method === 'GET' ? Data : {}
  return new Promise((resolve, reject) => {
    axios({
      url: url,
      data,
      params,
      method,
      responseType: 'json'
    })
      .then((result) => {
        const res = result.data
        if (res.errno === 0) {
          resolve(res.data)
        } else {
          reject(res.errmsg || '操作失败')
        }
      })
      .catch(() => {
        reject(new Error('网络繁忙，请稍后再试'))
      })
  })
}

export default fetch
