import modules from './modules/store'
import store from '@/store'

export default [
  {
    path: '/pages/news/index',
    config: {
      navigationBarTitleText: '新闻',
      usingComponents: {
        'i-panel': '../../libs/iview/panel/index',
        'i-row': '../../libs/iview/row/index',
        'i-cell': '../../libs/iview/cell/index',
        'i-col': '../../libs/iview/col/index',
        'i-button': '../../libs/iview/button/index'
      }
    }
  }
]

store.registerModule('news', {
  ...modules
})
