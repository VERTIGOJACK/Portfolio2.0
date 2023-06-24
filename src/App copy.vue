<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import "../src/style.css";
import "../src/highlight.css";
import PageTemplate from "./components/general/page/PageTemplate.vue";
import SwirlDiv from "./components/general/div/SwirlDiv.vue";
import CenterDiv from "./components/general/div/CenterDiv.vue";
import SocialStack from "./components/social/SocialStack.vue";
</script>

<template>
  <div>
  <RouterView v-slot="{ Component }">
  <template v-if="Component">
    <Transition mode="out-in">    
        <Suspense>
          <!-- main content -->
          <component :is="Component"></component>

          <!-- loading state -->
          <template #fallback>
            Loading...
          </template>
        </Suspense>
    </Transition>
  </template>
</RouterView>
    <PageTemplate>
      <Navbar class="sticky" />
      <SwirlDiv>
        <RouterView></RouterView>
      </SwirlDiv>
      <CenterDiv class="social">
        <SocialStack></SocialStack>
      </CenterDiv>
    </PageTemplate>
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
