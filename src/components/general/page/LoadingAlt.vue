<script setup>
  import Spinner from "../../spinner/Spinner.vue";
</script>
<template>
  <div class="center">
    <div class="width">
      <Spinner></Spinner>
    </div>
  </div>
</template>

<style scoped>
  .center {
    width: 100%;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .width {
    height: fit-content;
    width: 25%;
  }
</style>
