<script setup>
  import Herothree from "../components/herothree/Herothree.vue";
  import HomeContent from "../components/home/HomeContent.vue";
  import { ref, onMounted } from "vue";

  const sections = {
    title: "Loading...",
    content: "Loading...",
  };

</script>

<template>
  <Suspense>
    <div id="home">
      <!-- three js thing here instead of hero probably -->
      <div class="hero">
        <Herothree></Herothree>
      </div>
      <Suspense>
        <HomeContent></HomeContent>
      </Suspense>
    </div>
  </Suspense>
</template>

<style scoped>
  #home {
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }

  .hero {
    height: 500px;
  }

</style>
