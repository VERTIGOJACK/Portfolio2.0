<script setup>
  import { ref } from "vue";

  //class toggler
  const active = ref(false);
  const ToggleActive = () => {
    active.value = !active.value;
  };
</script>

<template>
  <section class="hamburger" @click="ToggleActive()">
    <div
      id="line1"
      :class="active ? 'active' : ''"
      style="--displace: -1"></div>
    <div id="line2" :class="active ? 'active' : ''" style="--displace: 0"></div>
    <div id="line3" :class="active ? 'active' : ''" style="--displace: 1"></div>
  </section>
</template>

<style scoped>
  .hamburger {
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 50px;
    aspect-ratio: 1/1;
    --active-color: var(--color-palette-6);
    --inactive-color: var(--color-palette-6);
  }

  .hamburger:hover div {
    background-color: var(--color-palette-2);
  }

  div {
    position: absolute;
    top: calc(50% - 3px);
    left: calc(50% - 15px);
    transform: translateY(calc(200% * var(--displace)));
    background-color: var(--inactive-color);
    height: 6px;
    width: 30px;
    transition: all 0.3s ease-in-out;
    pointer-events: none;
    border-radius: 2px;
  }

  .active {
    background-color: var(--active-color);
    transform: translateY(0) rotateZ(calc(45deg * var(--displace)));
  }

  #line2 {
    transform: rotateZ(0deg);
  }
  #line2.active {
    transform: rotateZ(45deg);
  }
</style>
