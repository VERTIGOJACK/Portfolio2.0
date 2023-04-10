<script setup>
  import { ref, onMounted } from "vue";
  const props = defineProps(["item", "currentSlide"]);
  const content = ref(null);
  onMounted(() => {
    content.value = props.item;
  });
</script>

<template>
  <div v-if="content != null" class="slide">
    <img :src="content.url" alt="" />
    <div class="slide-text">
      <div class="up">
        <h1 v-if="content.title">{{ content.title }}</h1>
      </div>
      <div class="down">
        <p v-if="content.text">{{ content.text }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .slide {
    z-index: -1;
    position: absolute;
    height: 100%;
    width: 100%;
    background-position: 0%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    transition: all 0.5s ease-in-out;
    filter: var(--common-shadow);
  }
/*  */
  .slide-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
    filter: var(--common-shadow);
  }

  .slide-text div {
    display: flex;
  }

  .up {
    align-items: center;
    font-size: small;
    text-align: center;
    height: 40%;
  }

  .down {
    align-items: flex-start;
    font-size: small;
    text-align: center;
    height: 60%;
  }

  img {
    z-index: -1;
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: blur(1px) brightness(0.3);
  }
</style>
