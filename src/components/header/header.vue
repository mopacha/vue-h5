<template>
  <div class="header">
		<span>{{title}}</span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    backLink: {
      type: Boolean,
      default: false
    },
    backText: {
      type: String,
      default: 'Back'
    }
  }
}
</script>

<style lang="less">
// not scoped
@import "./header.less";
</style>
