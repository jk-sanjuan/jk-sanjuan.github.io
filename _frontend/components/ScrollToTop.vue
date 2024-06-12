
<script setup lang="ts">
function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
</script>

<template>
  <div id="scroll-on-top"
       class="sticky-screen [opacity:0.34] hover:[opacity:0.79] cursor-pointer
              [bottom:70px] [right:53px] [position:fixed] [z-index:100] animate-opacity hide show">
    <a @click="scrollToTop"><i class="fa fa-arrow-up ![font-size:32px]"></i></a>
  </div>
</template>