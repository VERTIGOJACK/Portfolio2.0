<script setup>
  import { ref } from "vue";
  import Carousel from "../components/carousel/Carousel.vue";
  import Gallery from "../components/gallery/Gallery.vue";
  import Modal from "../components/modal/Modal.vue";
  //import data from JSON
  import * as galleryData from "../data/galleryData.json";
  const modalActive = ref(false);
  const currentImg = ref("");

  const showModal = (url) => {
    console.log(url);
    modalActive.value = true;
    currentImg.value = url;
  };
</script>

<template>
  <div id="graphics">
    <Modal
      class="modal"
      :modal-active="modalActive"
      @close-modal="modalActive = false"
      ><img :src="currentImg"
    /></Modal>
    <!-- three js thing here instead of hero probably -->
    <div class="hero">
      <Carousel class="carousel" :list="galleryData.highlights"></Carousel>
    </div>
    <div class="gallery">
      <Gallery :images="galleryData.gallery" @image-clicked="showModal">
      </Gallery>
    </div>
  </div>
</template>

<style scoped>
  #graphics {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .modal img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
  .hero {
    height: fit-content;
    width: calc(100% - 20px);
    padding-top: 10px;
  }
  .text-container {
    width: 80%;
  }
</style>
