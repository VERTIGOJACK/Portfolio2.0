<script setup>
import { useRoute } from "vue-router";
import SoftwareItemContent from "./SoftwareItemContent.vue";
import PageTemplate from "../../../components/general/page/PageTemplate.vue";
import CenterDiv from "../../../components/general/div/CenterDiv.vue";
import { ref, onMounted } from "vue";

const route = useRoute();
</script>

<template>
  <PageTemplate>
    <CenterDiv bottom="true">
      <SoftwareItemContent :softwareid="route.params.id"></SoftwareItemContent>
    </CenterDiv>
  </PageTemplate>
</template>

<style scoped></style>
