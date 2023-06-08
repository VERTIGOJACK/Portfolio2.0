<script setup>
  import Herothree from "../components/herothree/Herothree.vue";
  import HomeContent from "../components/home/HomeContent.vue";
  import SocialStack from "../components/social/SocialStack.vue";
</script>

<template>
  <Suspense>
    <div class="pagecontainer">
      <div id="home" class="pagerestrict">
        <!-- three js thing here instead of hero probably -->
        <div class="hero">
          <Herothree></Herothree>
        </div>
        <Suspense>
          <HomeContent></HomeContent>
        </Suspense>
        <div class="social">
          <SocialStack></SocialStack>
        </div>
      </div>
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
    background: linear-gradient(var(--color-palette-4), var(--color-palette-3));
  }

  .social {
    padding-bottom: 20px;
  }
</style>
