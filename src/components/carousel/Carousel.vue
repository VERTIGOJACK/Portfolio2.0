<script setup>
  import { ref, computed, watch, onMounted } from "vue";
  import Slide from "./Slide.vue";
  const props = defineProps(["list"]);

  const currentSlide = ref(1);
  const slideCount = ref(null);
  const carouselList = ref(null);

  const Next = () => {
    if (currentSlide.value >= slideCount.value) {
      currentSlide.value = 1;
      return;
    }
    currentSlide.value++;
  };

  const Previous = () => {
    console.log(currentSlide.value);
    if (currentSlide.value <= 1) {
      currentSlide.value = slideCount.value;
      return;
    }
    currentSlide.value--;
  };

  onMounted(() => {
    carouselList.value = props.list;
    slideCount.value = props.list.length;
  });

  watch(props, (values) => {
    carouselList.value = values.list;
    slideCount.value = values.list.length;
  });
</script>

<template>
  <div class="container">
    <section id="carousel" v-if="carouselList != null">
      <Slide
        v-for="(item, slideIndex) in carouselList"
        :class="currentSlide === slideIndex + 1 ? 'show' : 'hide'"
        :item="item"
        :key="slideIndex"
        :dim="item.title != '' || item.text != ''">
      </Slide>
      <div class="toggle-container">
        <div class="toggle-page left">
          <div class="btn" @click="Previous">&lt;</div>
        </div>
        <div class="toggle-page right">
          <div class="btn" @click="Next">&gt;</div>
        </div>
      </div>

      <div class="tab-container">
        <div class="tab-inner">
          <div
            class="tab"
            :class="currentSlide == tabIndex + 1 ? 'active' : ''"
            v-for="(item, tabIndex) in carouselList"
            :key="tabIndex"
            @click="currentSlide = tabIndex + 1"></div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
  .container {
    min-height: 300px;
    height: 1px;
  }

  #carousel {
    position: relative;
    height: 100%;
    width: 100%;
    z-index: 1;
  }

  .show {
    opacity: 1;
  }
  .hide {
    opacity: 0;
  }
  .toggle-container {
    height: 100%;
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .toggle-page {
    flex: 1;
    display: flex;
    width: 30px;
    font-size: 40px;
    align-items: center;
  }

  .toggle-page.right {
    justify-content: end;
  }

  .btn {
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.3);
    padding: 10px;
    user-select: none;
  }

  .tab-container {
    position: absolute;
    display: flex;
    justify-content: space-around;
    bottom: 0%;
    width: 100%;
    height: 10%;
  }

  .tab-inner {
    display: flex;
    justify-content: space-around;
    align-items: center;
    bottom: 0%;
    width: 30%;
    border-radius: 8px 8px 0px 0px;
  }

  .tab {
    background-color: rgba(255, 255, 255, 0.3);
    border-radius: 50%;
    width: 10px;
    height: 10px;
    transition: all 0.5s;
    cursor: pointer;
    filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.8));
  }

  .tab.active {
    transform: scale(1.2);
    background-color: var(--color-palette-6);
  }
</style>
