<script>
export default {
  mpType: 'app',
  onLaunch () {
    // 掉网的提示
    wx.onNetworkStatusChange((res) => {
      if (!res.isConnected) {
        wx.showToast({
          title: '请检查网络连接',
          icon: 'none'
        })
      }
    })
  }
}
</script>

<style>
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
}
</style>
