
import axios from 'axios'

switch (process.env.NODE_ENV) {
  case 'development':
    axios.defaults.baseURL = 'https://hn.algolia.com/api/v1/'; break
  case 'quality':
    axios.defaults.baseURL = 'https://hn.algolia.com/api/v1/'; break
  case 'production':
    axios.defaults.baseURL = 'https://hn.algolia.com/api/v1/'; break
}

console.log()
axios.defaults.adapter = (config) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${config.url}`,
      methods: config.method,
      data: {
        ...config.data
      },
      success (res) {
        resolve(res)
      },
      fail (err) {
        reject(err)
      }
    })
  })
}

export default axios
