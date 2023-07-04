<script setup>
  import { useRoute } from "vue-router";
  import SoftwareItemContent from "./SoftwareItemContent.vue";
  import PageTemplate from "../../../components/general/page/PageTemplate.vue";
  import CenterDiv from "../../../components/general/div/CenterDiv.vue";
  import { ref, onMounted } from "vue";

  const route = useRoute();

  console.log(route.params);
</script>

<template>
  <PageTemplate>
    <CenterDiv bottom="true">
      <SoftwareItemContent></SoftwareItemContent>
    </CenterDiv>
  </PageTemplate>
</template>

<style scoped>
  .item {
    border-style: solid;
    border-width: 0px 0px 8px 0px;
    border-color: var(--accent-1);
    padding-bottom: 32px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
