<script lang="ts" setup>
import Item from "~/components/profile/Item.vue";
</script>

<template>
  <div class="profile-card h-[319px] max-w-[500px] md:h-[560px]">
    <div class="profile-navbar">
      <div class="list animate-pulse">
        <Item v-for="item in [0,1,2,4]"/>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-card {
  @apply w-full md:w-[96%];
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;
  overflow: hidden;
  position: relative;
  background: #31558a;
}

.profile-navbar {
  height: 73px;
  background: #385e97;
}

.list {
  padding-top: 107px;
  text-align: left;
}
</style>