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
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  img {
    height: 235px;
    aspect-ratio: 1/1;

    object-fit: cover;
  }
</style>
