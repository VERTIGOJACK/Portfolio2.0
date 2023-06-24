<script setup>
const props = defineProps({ bottom: false });
</script>

<template>
  <div class="pagecontainer">
    <div class="innerpage" :class="bottom ? 'bottom' : ''">
      <slot></slot>
    </div>
  </div>
</template>

<style>
.innerpage {
  width: 80%;
}

.bottom {
  padding-bottom: var(--lengths-lg-1);
}
</style>
