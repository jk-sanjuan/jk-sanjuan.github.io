<script setup lang="ts">

import {onMounted, ref, reactive, watch, computed} from 'vue';

const items = ref<Array<string>>([]);
const show = ref<boolean>(false)

onMounted(() => {
    items.value = window.__navMoreMenu;
    window.__navMore = show
})
</script>

<template>
    <div :class="[{ 'invisible': !show }]">
        <Menu :model="items"/>
        <div class="p-menu-bg [z-index:-1] p-0 m-1" :class="{ 'p-menu-bg--show': show }"></div>
    </div>
</template>

<style scoped lang="scss">
.invisible {
    @apply h-0 max-h-0;
}
</style>