<script setup></script>

<template>
  <section class="container">
    <div class="inner-section loading"></div>
    <div class="inner-section loading"></div>
  </section>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 40px;
  padding: 4px;
}
.inner-section {
  display: flex;
  align-items: center;
  margin: 0px;
  width: 80%;
  height: 1rem;
  margin-bottom: 2px;
}
</style>
