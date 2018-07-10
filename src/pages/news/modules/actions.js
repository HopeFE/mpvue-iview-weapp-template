import * as types from './mutationTypes'
import axios from '@/libs/axios'

/** 获取文章信息 */
export const getNews = ({ rootState, commit, state }) => {
  return new Promise((resolve, reject) => {
    axios({
      method: 'get',
      url: 'search_by_date',
      params: {
        // tags: rootState.route.params.tags,
        tags: 'story',
        page: state.news.startPage
      }
    }).then((response) => {
      commit(types.NEWS, response.data)
      resolve(response)
    }).catch((error) => {
      reject(error)
    })
  })
}

/** 文章数据清空 */
export const clearNews = ({commit}) => {
  commit(types.NEWS_CLEAR)
}
