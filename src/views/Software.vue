<script setup>
  import SoftwareList from "../components/softwarelist/SoftwareList.vue";
</script>

<template>
  <div class="pagecontainer">
    <div id="software" class="pagerestrict">
      <!-- <div class="outer">
      <div class="text-container">
        <h1>{{ softwareContent.title }}</h1>
        <p v-html="softwareContent.description"></p>
      </div>
    </div> -->
    <SoftwareList></SoftwareList>
    </div>
  </div>
</template>

<style scoped>
  #software {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-palette-3);
  }

  .hero {
    height: 400px;
  }
  .outer {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-palette-3);
    filter: var(--common-shadow);
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
    filter: var(--common-shadow);
    padding-bottom: 32px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .call-to-action {
    background-color: var(--color-palette-1);
    filter: var(--common-shadow);
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
