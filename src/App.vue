<template>
  <div id="app">
    <loading v-if="isLoading"></loading>
    <router-view />
  </div>
</template>

<script>

import Loading from '@/components/loading'
import { mapGetters } from "vuex";
export default {
  components: {
    Loading
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>

<style lang="less">
@import "./styles/common.less";
</style>




