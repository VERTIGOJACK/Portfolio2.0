<script setup>
  import GraphicsContent from "../components/graphics/GraphicsContent.vue";
</script>

<template>
  <div class="pagecontainer">
    <div class="pagerestrict">
      <Suspense>
        <GraphicsContent></GraphicsContent>
      </Suspense>
    </div>
  </div>
</template>

<style scoped></style>
