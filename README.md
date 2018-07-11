# mpvue-iview-weapp-template
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)
>  本脚手架主要基于 [mpvue](http://mpvue.com/) + [iviewui](https://weapp.iviewui.com/?from=iview)

## 使用前必读

### 必读文档

- [微信公众平台](https://mweixin.qq.com/)

- [小程序API文档](https://developers.weixin.qq.com/miniprogram/introduction/index.html?t=201879)

- [使用 Vue.js 开发小程序的前端框架 - mpvue](http://mpvue.com/)

- [微信小程序 UI 组件库 - iviewui](https://weapp.iviewui.com/?from=iview)

### 环境准备
```
安装Node.js > 8
安装yarn
全局安装vue-cli3.0（mac 需要 sudo）
npm install -g @vue/cli
# OR
yarn global add @vue/cli
```
### 推荐IDE

- [VSCODE](https://code.visualstudio.com/)

#### Vscode推荐插件

- [Vetur - Vue tooling for VS Code](https://vuejs.github.io/vetur/)

- [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [EditorConfig](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)

- [language-stylus](https://marketplace.visualstudio.com/items?itemName=sysoev.language-stylus)

- [mpvue-snippets](https://marketplace.visualstudio.com/items?itemName=banxi.mpvue-snippets)

### JS风格指南

- [JavaScript Standard Style](https://standardjs.com/rules-zhcn.html)

### Vue风格指南

- [style-guide](https://youzan.github.io/vant/#/zh-CN/style-guide)

## Main Javascript Framework

-	[Vue](http://cn.vuejs.org/guide/)

-	[Vuex](http://vuex.vuejs.org/zh-cn/index.html)

-	[Axios - Http Client](https://github.com/mzabriskie/axios)

## UI Compoents

-	[iviewui - 小程序UI库](https://weapp.iviewui.com/components/page)

## Plugins

- [vue-content-loader - 占位区域](https://github.com/egoist/vue-content-loader)

## 功能

### 配置优化

- px自动转换rpx(默认1px = 2rpx)[px2rpx-loader](https://github.com/cuth/postcss-pxtorem)
``` css
// 重要！！
min-height: 55Px; /* px不转成rem*/
```

## File Structure Introduction

```
├── public
  ├── index.html    # Html Template
├── src             # Code Folder
  ├── assets        # 资源
  ├── components    # 组件
  ├── plugins       # 插件
  ├── pages         # 页面
    ├── modules       # 逻辑层
    ├── pages         # 视图层
  ├── app.vue     # 入口页面
  ├── router      # 主路由
  ├── store.js    # Store
  ├── main.js     # 入口JS
```

### 开始

## Install
```
npm/yarn install
npm/yarn run dev
open http://localhost:8088
```

### Build
```
npm/yarn run build
open Files in DistT Folder
```

## 高级进阶
- [Vue CLI3.0](https://cli.vuejs.org)

## TODO
1. 自动注入route
2. 自动注入store
3. 使用Vue-cli3.0
4. 更多的公共数据转换（时间，金额等等）

# 坑
1.[vue文件中不能缺少script标签](https://github.com/Meituan-Dianping/mpvue/issues/562)，否则会导致编译不了。

