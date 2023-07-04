<script setup>
  import { ref, onMounted } from "vue";
  import { onBeforeRouteLeave } from "vue-router";
  import PageTemplate from "../components/general/page/PageTemplate.vue";
  import CenterDiv from "../components/general/div/CenterDiv.vue";
  import Visualizer from "../components/visualizer/Visualizer.vue";
  import { secondsToTimeFormat } from "../components/helper/secondsToTimeformat.js";
  import Spinner from "../components/spinner/Spinner.vue";
</script>

<template>
  <PageTemplate>
    <CenterDiv bottom="true">
      <div class="center">
        <Spinner class="width"></Spinner>
      </div>
    </CenterDiv>
  </PageTemplate>
</template>

<style scoped>
  .center {
    width: 100%;
    display: flex;
    justify-content: center;
    align-content: center;
  }
  .width {
    width: 25%;
  }
</style>
