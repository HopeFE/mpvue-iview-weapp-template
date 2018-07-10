<template>
  <div>
    <i-panel class="cell-panel-demo">
      <i-cell title="单行列表" label="附加描述" value="详细信息"/>
    </i-panel>
  </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters('news', [
      'News'
    ])
  },
  methods: {
    ...mapActions('news', [
      'getNews',
      'clearNews'
    ])
  },
  mounted () {
    this.getNews()
  }
}
</script>
<style>
</style>
