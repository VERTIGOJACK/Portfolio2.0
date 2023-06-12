<script setup>
  import { ref, onMounted } from "vue";

  const props = defineProps(["active"]);
</script>

<template>
  <section class="hamburger" v-if="props.active != null">
    <div
      id="line1"
      :class="props.active ? 'active' : ''"
      style="--displace: -1"></div>
    <div
      id="line2"
      :class="props.active ? 'active' : ''"
      style="--displace: 0"></div>
    <div
      id="line3"
      :class="props.active ? 'active' : ''"
      style="--displace: 1"></div>
  </section>
</template>

<style scoped>
  .hamburger {
    cursor: pointer;
    position: relative;
    height: 100%;
    width: 50px;
    aspect-ratio: 1/1;
    --active-color: var(--monochrome-5);
    --inactive-color: var(--monochrome-5);
    --hover-color: var(--monochrome-3);
  }

  .hamburger:hover div {
    background-color: var(--hover-color);
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
