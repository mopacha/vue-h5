<template>
  <div class="loading">
    <div class="half-circle-spinner">
      <div class="circle circle-1"></div>
      <div class="circle circle-2"></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.loading {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
  padding-top: 200px;
  /* background: rgba(0, 0, 0, 0.5);  */
  color: white;
}

.half-circle-spinner,
.half-circle-spinner * {
  box-sizing: border-box;
}

.half-circle-spinner {
	display: inline-block;
	text-align: center;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  position: relative;
}

.half-circle-spinner .circle {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  border: calc(40px / 8) solid transparent;
}

.half-circle-spinner .circle.circle-1 {
  border-top-color: #1989fa;
  animation: half-circle-spinner-animation 1s infinite;
}

.half-circle-spinner .circle.circle-2 {
  border-bottom-color: #1989fa;
  animation: half-circle-spinner-animation 1s infinite alternate;
}

@keyframes half-circle-spinner-animation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>