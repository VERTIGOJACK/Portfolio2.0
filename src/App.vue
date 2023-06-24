<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import "../src/style.css";
import "../src/highlight.css";
import PageTemplate from "./components/general/page/PageTemplate.vue";
import SwirlDiv from "./components/general/div/SwirlDiv.vue";
import CenterDiv from "./components/general/div/CenterDiv.vue";
import SocialStack from "./components/social/SocialStack.vue";
import Loading from "./components/general/page/Loading.vue";
</script>

<template>
  <div>
    <RouterView> </RouterView>
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
