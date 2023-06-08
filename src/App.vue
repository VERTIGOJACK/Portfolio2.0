<script setup>
  import { RouterView } from "vue-router";
  import Navbar from "./components/Navbar.vue";
  import "../src/style.css";

</script>

<template>
  <div>
    <Navbar class="sticky" />
      <RouterView />
  </div>
</template>

<style scoped>
  .sticky {
    position: sticky;
    top: 0;
  }
</style>
