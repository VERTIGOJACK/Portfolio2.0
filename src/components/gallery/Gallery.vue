<script setup>
  const props = defineProps(["images"]);
</script>

<template>
  <div class="inner">
    <div class="gallery">
      <img
        v-for="image in images"
        :src="image.url"
        alt=""
        @click="$emit('image-clicked', image.url)" />
    </div>
  </div>
</template>

<style scoped>
  .inner {
    --gap: 10px;
    padding: var(--gap);
   
  }

  .gallery {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--gap);
    justify-items: center;
  }

  img {
    width: 100%;
    aspect-ratio: 1/1;
    cursor: pointer;
    object-fit: cover;
  }
</style>
