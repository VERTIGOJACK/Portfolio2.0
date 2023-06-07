<script setup>
  import { ref } from "vue";
  import Carousel from "../carousel/Carousel.vue";
  import Gallery from "../gallery/Gallery.vue";
  import Modal from "../modal/Modal.vue";
  //import data from JSON
  const galleryData = {
    highlights: [
      {
        url: "",
        title: "",
        text: "",
      },
    ],
    gallery: [
      {
        url: "",
      },
    ],
  };
  //return clean html
  const CleanHtml = (html) => {
    const tempItem = document.createElement("div");
    tempItem.innerHTML = html;
    return tempItem.innerHTML;
  };

  //get highlights
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/media?gallery-category=12"
  );
  const json = await response.json();
  const cleanArrayHighlights = json.map((item) => {
    return {
      url: item.media_details.sizes.medium.source_url || item.source_url,
      title: CleanHtml(item.title.rendered),
      text: CleanHtml(item.caption.rendered).replace(/<[^>]*>?/gm, ""),
    };
  });

  galleryData.highlights = cleanArrayHighlights;

  //get regular
  const response2 = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/media?gallery-category=13"
  );
  const json2 = await response2.json();
  const cleanArrayRegular = json2.map((item) => {
    return {
      url: item.media_details.sizes.medium_large.source_url || item.source_url,
    };
  });

  galleryData.gallery = cleanArrayRegular;

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
