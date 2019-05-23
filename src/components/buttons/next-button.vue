<template>
  <a class="next-button" @click="onclick">
    {{text}}
  </a>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: '下一步'
    }
	},
	methods: {
		onclick() {
			 this.$emit('onclick')
		}
	},
}
</script>

<style lang="less">
// not scoped
@import "./next-button.less";
</style>
