<script setup>
import { RouterView } from "vue-router";
import "../src/style.css";
import "../src/highlight.css";
import "../src/wp.css"

</script>

<template>
  <div>
    <RouterView > </RouterView>
  </div>
</template>

<style scoped>
.sticky {
  position: sticky;
  top: 0;
}

.social {
  padding-bottom: var(--lengths-md-3);
  width: 80%;
}
</style>
