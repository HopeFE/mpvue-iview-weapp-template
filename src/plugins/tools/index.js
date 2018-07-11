import validator from './validator'

export default {
  /**
   * 自定义方法
   * 组件内使用： this.$tools.validator
   * 全局使用：Vue.tools.validator
   */
  install (Vue) {
    const tools = {
      ...validator
    }
    Vue.tools = tools
    Vue.prototype.$tools = tools
  }
}
