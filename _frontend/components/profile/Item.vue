<script lang="ts" setup>
</script>

<template>
  <div class="item">
    <div class="img"></div>
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<style scoped>
.item {
  height: 115px;
  margin-top: 0;
  padding-left: 115px;
  clear: both;
}

.item .img, .item span {
  background: #214273;
  border-radius: 3px;
}

.item .img {
  float: left;
  width: 71px;
  height: 71px;
  margin-left: -93px;
}

.item span {
  height: 11px;
  width: 96%;
  margin-bottom: 19px;
  float: left;
}

.item span:nth-of-type(3) {
  width: 40%;
  margin-bottom: 0;
}
</style>