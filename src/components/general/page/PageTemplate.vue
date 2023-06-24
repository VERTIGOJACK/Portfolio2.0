<script setup>
  import Navbar from "../../Navbar.vue";
  import SocialStack from "../../social/SocialStack.vue";
  import CenterDiv from "../div/CenterDiv.vue";
  import SwirlDiv from "../div/SwirlDiv.vue";
  import Loading from "./Loading.vue";
</script>

<template>
  <Suspense>
    <template #default>
      <div class="pagecontainer">
        <div class="pagerestrict">
          <Navbar class="sticky" />
          <SwirlDiv>
            <slot></slot>
          </SwirlDiv>
          <CenterDiv class="social">
            <SocialStack></SocialStack>
          </CenterDiv>
        </div>
      </div>
    </template>
    <template #fallback>
      <div class="pagecontainer">
        <div class="pagerestrict">
          <Navbar class="sticky" />
          <Loading></Loading>
        </div>
      </div>
    </template>
  </Suspense>
</template>
<style scoped>
  svg {
    display: none;
  }

  .noise {
    background: url("#noise");
  }

  .sticky {
    position: sticky;
    top: 0;
  }

  .social {
    padding-bottom: var(--lengths-md-3);
    width: 80%;
  }
</style>
