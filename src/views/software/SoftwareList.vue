<script setup>
  import SoftwareListContent from "./SoftwareListContent.vue";
  import PageTemplate from "../../components/general/page/PageTemplate.vue";
  import CenterDiv from "../../components/general/div/CenterDiv.vue";
</script>

<template>
  <PageTemplate>
    <CenterDiv bottom="true">
      <SoftwareListContent></SoftwareListContent>
    </CenterDiv>
  </PageTemplate>
</template>

<style scoped>
  .social {
    padding-bottom: var(--lengths-md-3);
    width: 80%;
  }

  #software {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-palette-3);
  }

  .outer {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-palette-3);
  }
  .text-container {
    width: 80%;
  }

  .items-container {
    width: 80%;
  }

  .item {
    border-style: solid;
    border-width: 0px 0px 8px 0px;
    border-color: var(--color-palette-3);
    padding-bottom: 32px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .call-to-action {
    background-color: var(--color-palette-1);
    border-radius: 3px;
    padding: 4px;
    transition: all 0.2s ease-in-out;
  }

  .call-to-action:hover {
    background-color: var(--color-palette-2);
    color: var(--color-palette-6);
    filter: var(--common-shadow);
    transform: scale(1.05);
  }
</style>
