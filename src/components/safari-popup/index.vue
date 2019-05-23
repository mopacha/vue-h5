<template>
  <over-layer class="safari-popup"
              v-if="showLayer">
    <div class="arrow">
      <img src="./img/arrow.png" />
    </div>
    <div class="safari-text">
      <img src="./img/safari-text.png" />
    </div>
  </over-layer>
</template>
<script>
import { OverLayer } from '@/components/overlayer'
import { judgeClient, judgeTerminal } from '@/utils/judge'
export default {
  components: {
    OverLayer
  },

  created() {
    this.isShowLayer()
  },
  data() {
    return {
      showLayer: false
    }
  },
  methods: {
    judgeClient,
    judgeTerminal,
    isShowLayer() {
      const client = this.judgeClient()
      const isWeixin = this.judgeTerminal().weixin
      if (client === 'IOS' && isWeixin) {
        this.showLayer = true
      }
    }
  }
}
</script>

<style lang="less">
.safari-popup {
  .arrow {
    padding-top: 50px;
    padding-right: 20px;
    text-align: right;
    img {
      height: 88px;
    }
  }
  .safari-text {
		text-align: center;
    padding-top: 40px;
    img {
      height: 20px;
    }
  }
  
}
</style>
