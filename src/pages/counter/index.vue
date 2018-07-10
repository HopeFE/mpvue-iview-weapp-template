<template>
  <div class="counter-warp">
    <mp-slider v-model="sliderValue" />
    <p>Vuex counter：{{ count }}</p>
    <p>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
    </p>
    <mp-radio
      v-model="radioValue"
      :options="options"
      :title="单选列表项"
    />
    <p>恭喜你选中了：{{ radioValue }}</p>
    <mp-agree
      url-text="《相关条款》"
      v-model="isAgree"
      url="../index/index"
    />
    <p>你同意吗？：{{ isAgree }}</p>
    <mp-checklist
      v-model="checkboxValue"
      :title="复选列表项"
      :options="options"
    />
    <p>恭喜你选中了：{{ checkboxValue }}</p>
    <mp-actionsheet
      :actions="actions"
      v-model="value"
    >
      <button type="default">ActionSheet</button>
    </mp-actionsheet>
    <p>你刚才做了这个动作：{{ value }}</p>
    <a href="/pages/index/index" class="home">去往首页</a>
  </div>
</template>

<script>
// Use Vuex
import { mapState, mapActions } from 'vuex'
import MpRadio from 'mp-weui/packages/radio'
import MpAgree from 'mp-weui/packages/agree'
import MpChecklist from 'mp-weui/packages/checklist'
import MpActionsheet from 'mp-weui/packages/actionsheet'
import Dialog from 'mp-weui/packages/dialog'
import MpMessage from 'mp-weui/packages/message'
import MpSlider from 'mp-weui/packages/slider'
import MpNavbar from 'mp-weui/packages/navbar'

export default {
  data () {
    return {
      sliderValue:'',
      actions:['动作1','动作2','动作3'],
      value:'',
      isAgree:true,
      radioValue:'还没选哦',
      checkboxValue:'我是复选框',
      options: [
        {
          label: '被禁用了',
          value: 'A',
          disabled: true
        },
        {
          label: '我是选项B',
          value: 'B'
        },
        {
          label: '我是选项C',
          value: 'C'
        }
      ],
    }
  },
  components: {
    MpRadio,MpAgree,MpChecklist,MpActionsheet,MpMessage, MpSlider, MpNavbar
  },
  computed: {
    ...mapState({
      count: state => state.counter.count
    }),

  },
  watch:{
    radioValue:function(){
      Dialog.alert('你选择了动作'+ this.radioValue)
    }
  },
  mounted () {
    this.getProvince({
      testParams: '1'
    }).then(res => {
      console.log(res)
    })
  },
  methods: {
    ...mapActions('counter', [
      'increment',
      'decrement',
      'getProvince'
    ])
  }
}

</script>
<style>
.counter-warp {
  text-align: center;
  margin-top: 100px;
}
.home {
  display: inline-block;
  margin: 100px auto;
  padding: 5px 10px;
  color: blue;
  border: 1px solid blue;
}

</style>
