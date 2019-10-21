import { baseURL } from './config.js'

export default (options) => {
  return new Promise((resolve,reject) => {
    wx.request({
      url: baseURL + options.url,
      data: options.data || {},
      // header: {},
      method: options.method ||'GET',
      dataType: 'json',
      responseType: 'text',
      success: resolve,
      fail: reject,  
    })
  })
}

 