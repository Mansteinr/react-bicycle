import jsonp from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd'

export default class Axios {
  static jsonp (options) {
    return new Promise((resolve, reject) => {
      jsonp(options.url, {
        param: 'callback'
      }, function (err, res) {
        if(!res) return
        if (res.code === 0) {
          resolve(res)
        } else {
          reject(res.message)
        }
      })
    })
  }
  static ajax (options) {
    let loading;
    loading = document.getElementById('ajaxLoading')
    loading.style.display = 'block'
    const baseApi = '/config'
    return new Promise((resolve, reject) => {
      axios({
        url: options.url,
        method: 'get',
        baseURL: baseApi,
        timeout: 5000,
        params: (options.data && options.data.param) || ''
      }).then(res => {
        loading.style.display = 'none'
        if (res.status === 200) {
          let data = res.data
          if (data.code === 0) {
            resolve(data)
          } else {
            Modal.info({
              title: '提示',
              content: res.msg
            })
          }
        } else {
          reject(res.data)
        }
      }).catch(err => {
          Modal.warning({
            title: '警告',
            content: err.message
          })
          loading.style.display = 'none'
      })
    })
  }
}