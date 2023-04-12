<script setup>
  import { ref } from "vue";
  import Carousel from "../components/carousel/Carousel.vue";
  import Gallery from "../components/gallery/Gallery.vue";
  import Modal from "../components/modal/Modal.vue";
  const modalActive = ref(false);
  const currentImg = ref("");

  const showModal = (url) => {
    console.log(url);
    modalActive.value = true;
    currentImg.value = url;
  };

  const imageList = {
    highlights: [
      {
        url: "https://drive.google.com/uc?id=1aQWBd54AMBfVZsWkLSAtokBpo_-h440s",
        title: "",
        text: "",
      },
      {
        url: "https://drive.google.com/uc?id=1Dj06EOSN17DU34d5w6oPmqINRP0-5X5W",
        title: "",
        text: "",
      },
      {
        url: "https://drive.google.com/uc?id=1YiZewW5c145CDnPbfl9z92WDc-taWLle",
        title: "",
        text: "",
      },
    ],
    gallery: [
      {
        url: "https://drive.google.com/uc?id=1aQWBd54AMBfVZsWkLSAtokBpo_-h440s",
      },
      {
        url: "https://drive.google.com/uc?id=1Dj06EOSN17DU34d5w6oPmqINRP0-5X5W",
      },
      {
        url: "https://drive.google.com/uc?id=1YiZewW5c145CDnPbfl9z92WDc-taWLle",
      },
    ],
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
      <Carousel class="carousel" :list="imageList.highlights"></Carousel>
    </div>
    <div class="gallery">
      <Gallery :images="imageList.gallery" @image-clicked="showModal">
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
