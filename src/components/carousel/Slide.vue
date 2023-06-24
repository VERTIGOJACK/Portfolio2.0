<script setup>
  import { ref, onMounted, watch } from "vue";
  const props = defineProps(["item", "currentSlide", "dim"]);
  const content = ref(null);
  onMounted(() => {
    content.value = props.item;
  });

  watch(props, (newprops) => {
    content.value = newprops.item;
  });
</script>

<template>
  <div v-if="content != null" class="slide">
    <img :src="content.url" alt="" :class="dim ? 'dim' : ''" />
    <div class="slide-text">
      <div class="up">
        <h1 v-if="content.title">{{ content.title }}</h1>
      </div>
      <div class="down">
        <div v-if="content.text">{{ content.text }}</div>
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
  }

  .dim {
    filter: blur(1px) brightness(0.3);
  }
</style>
