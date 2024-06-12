<script setup lang="ts">
function scrollToTop(event: Event) {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<template>
    <div id="scroll-on-top"
         class="sticky-screen ![opacity:0.34] hover:![opacity:0.79] cursor-pointer
              [bottom:70px] [right:53px] [position:fixed] [z-index:100] hide">
        <a @click="scrollToTop"><i class="fa fa-arrow-up ![font-size:32px]"></i></a>
    </div>
</template>

<style lang="scss">
#scroll-on-top {
    &:hover {
        @apply h-[55px];
    }
    transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;
    height: 63px;
    opacity: 1;
    display: block !important;
}

.hide {
    transition: opacity 0.3s ease-in-out, height 0.3s ease-in-out;
    height: 0 !important;
    opacity: 0;
    overflow: hidden;
    margin: 0 !important;
    padding: 0 !important;
}
</style>