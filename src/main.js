import Vue from 'vue'
import App from '@/App'
import store from './store.js'
import tools from '@/plugins/tools'

Vue.config.productionTip = false

Vue.use(tools)

const app = new Vue({
  store,
  ...App
})

app.$mount()

export default {
  config: {
    pages: [
      'pages/news/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar: {
      color: '#aaa',
      selectedColor: '#3FC6C6',
      borderStyle: 'black',
      backgroundColor: '#ffffff',
      list: [{
        pagePath: 'pages/news/index',
        iconPath: 'static/assets/news/statistics.png',
        selectedIconPath: 'static/assets/news/statistics_select.png',
        text: '1'
      }, {
        pagePath: 'pages/news/index',
        iconPath: 'static/assets/news/workbook.png',
        selectedIconPath: 'static/assets/news/workbook_select.png',
        text: '2'
      }, {
        pagePath: 'pages/news/index',
        iconPath: 'static/assets/news/paper.png',
        selectedIconPath: 'static/assets/news/paper_select.png',
        text: '3'
      }, {
        pagePath: 'pages/news/index',
        iconPath: 'static/assets/news/user.png',
        selectedIconPath: 'static/assets/news/user_select.png',
        text: '4'
      }]
    },
    networkTimeout: {
      request: 6000,
      downloadFile: 6000
    }
  }
}
