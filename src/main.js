import Vue from 'vue'
import App from '@/App'
import store from './store.js'

Vue.config.productionTip = false

import IboxPlugin from '@/plugins/ibox'
Vue.use(IboxPlugin)

const app = new Vue({
  store,
  ...App
})

app.$mount()

export default {
  config: {
    pages: [],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    // tabBar: {
    //   color: '#aaa',
    //   selectedColor: '#3FC6C6',
    //   borderStyle: 'black',
    //   backgroundColor: '#ffffff',
    //   list: [{
    //     pagePath: 'pages/workbook/index',
    //     iconPath: 'common/resources/statistics.png',
    //     selectedIconPath: 'common/resources/statistics_select.png',
    //     text: '记错题'
    //   }, {
    //     pagePath: 'pages/statistics/index',
    //     iconPath: 'common/resources/workbook.png',
    //     selectedIconPath: 'common/resources/workbook_select.png',
    //     text: '错题本'
    //   }, {
    //     pagePath: 'pages/paper/index',
    //     iconPath: 'common/resources/paper.png',
    //     selectedIconPath: 'common/resources/paper_select.png',
    //     text: '资源'
    //   }, {
    //     pagePath: 'pages/my/index',
    //     iconPath: 'common/resources/user.png',
    //     selectedIconPath: 'common/resources/user_select.png',
    //     text: '我的'
    //   }]
    // },
    networkTimeout: {
      request: 6000,
      downloadFile: 6000
    }
  }
}
