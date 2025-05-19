<template>

  <div class="group footer-col flex-shrink-0">
    <!--- Johnella Kyle San Juan -->
    <h3 class="footer__title group-hover:hover-shade">
      <span class="footer__title--shade">
        <span class="djvu-serif-bold">JK</span> San
      </span><span class="footer__title--text"> Juan</span><span></span></h3>
    <ul class="*:p-1 *:anim-hover stagger-anim">
      <li style="--p: 1"><div class="scroll-anim">Shop</div></li>
      <li style="--p: 2"><div class="scroll-anim">Clinic</div></li>
      <li style="--p: 3"><div class="scroll-anim">Life</div></li>
      <li style="--p: 4"><div class="scroll-anim">About</div></li>
    </ul>
  </div>
</template>

<script lang="ts" setup>

import { onMounted } from 'vue';

function initialize() {
  const io = new IntersectionObserver( (entries) => {
    entries.forEach( (entry) => {

      entry.target.classList.toggle('delay-animation', entry.isIntersecting);
    });

  }, { threshold: 0.5});
  io.observe(document.querySelector('.footer-col')!);
}

onMounted( () => {
  initialize();
})

</script>

<style>

.hover-shade:before {
  width: 139px;
  transition: width .9s ease-in-out;
}

.footer__title--shade {
  display: inline-block;

  height: 0;

  transform: translateX(100%);
  transition: all .4s, height 400ms ease 400ms;

  @apply px-2 -ml-2;
}

.delay-animation .footer__title--shade {
  height: 1.2em;
  transform: translateX(0);
  background-color: #e4fc49 !important;
}

.footer__title--text {
  transform: scale(0);
  transition: transform ease 500ms 500ms;
  position: absolute;
}

.delay-animation .footer__title--text {
  transform: scale(1);
}

ul.stagger-anim li .scroll-anim {
  transform: translateX(110%);
  transition: transform 500ms ease;
}

.delay-animation ul.stagger-anim li .scroll-anim {
  transform: translateX(0);
  transition-delay: calc(var(--p) * 200ms + 1000ms);
}

.footer-col ul li {
  transition: all 0.15s ease;
}

.footer-col ul li:hover {
  padding-left: 14px;
}

</style>