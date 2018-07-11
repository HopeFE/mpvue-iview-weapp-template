<template>
  <div>
    <i-panel class="cell-panel-demo">
      <i-cell
        v-for="(item, index) in News.list" :key="index"
        :title="item.story_title || item.title" :label="item.author"
      />
    </i-panel>
    <i-spin :wx:if="spinShow" size="large" fix></i-spin>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
      spinShow: true
    }
  },
  computed: {
    // 注入Getters
    ...mapGetters('news', [
      'News'
    ])
  },
  methods: {
    // 注入actions
    ...mapActions('news', [
      'getNews',
      'clearNews'
    ])
  },
  async mounted () {
    await this.getNews()
    this.spinShow = false
  },
  onShareAppMessage (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '我是分享测试',
      imageUrl: '',
      path: '/pages/workbook/index'
    }
  }
}
</script>
<style lang="stylus" scoped>
.cell-panel-demo {
  width: 200Px;
}
</style>
