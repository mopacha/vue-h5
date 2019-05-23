<template>
  <div class="overlayer"  @touchmove.prevent>
   <slot></slot>
  </div>
</template>
<script>
export default {
}
</script>

<style lang="less">
// not scoped
@import "./overlayer.less";
</style>
