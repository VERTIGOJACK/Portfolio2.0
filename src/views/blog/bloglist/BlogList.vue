<script setup>
  import CenterDiv from "../../../components/general/div/CenterDiv.vue";
  import PageTemplate from "../../../components/general/page/PageTemplate.vue";
  import BlogListContent from "./BlogListContent.vue";
</script>

<template>
  <PageTemplate>
    <CenterDiv bottom="true">
      <BlogListContent></BlogListContent>
    </CenterDiv>
  </PageTemplate>
</template>

<style scoped>
  .post h1 {
    transition: all 0.1s ease-in-out;
  }

  .post:hover h1 {
    transform: scale(1.01);
    color: var(--accent-1);
  }

  h1 {
    font-size: large;
  }

  p {
    font-size: small;
  }
</style>
