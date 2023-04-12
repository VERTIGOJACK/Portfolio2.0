<script setup>
  const props = defineProps(["images"]);
</script>

<template>
  <div class="gallery">
    <img
      v-for="image in images"
      :src="image.url"
      alt=""
      @click="$emit('image-clicked', image.url)" />
  </div>
</template>

<style scoped>
  .gallery {
    padding: 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    flex-wrap: wrap;
    gap: 10px;
    justify-items: center;
  }

  img {
    width: 46vw;
    aspect-ratio: 1/1;

    object-fit: cover;
  }
</style>
