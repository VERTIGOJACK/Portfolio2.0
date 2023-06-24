<script setup>
import { ref } from "vue";
import Carousel from "../../components/carousel/Carousel.vue";
import Gallery from "../../components/gallery/Gallery.vue";
import Modal from "../../components/modal/Modal.vue";

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
  <Modal
    class="modal"
    :modal-active="modalActive"
    @close-modal="modalActive = false"
    ><img class="myimg" :src="currentImg"
  /></Modal>
  <div id="graphics">
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
.myimg {
  object-fit: contain;
  width: 100%;
}

.test {
  position: fixed;
  height: 50px;
  width: 50px;
  background-color: var(--accent-3);
  z-index: 100000;
}
#graphics {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.hero {
  height: fit-content;
  width: calc(100% - 20px);
  padding-top: 10px;
}
</style>
