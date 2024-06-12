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
    <div :class="{ 'nav-more--show': show }">
        <Menu :model="items"/>
    </div>
</template>
<style scoped lang="scss">
.nav-more--show {
    @apply [display:block];
}
</style>