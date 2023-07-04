<script setup>
  import Carousel from "../../../components/carousel/Carousel.vue";
  import { getDataList } from "../functions";
  import { ref, onMounted } from "vue";

  // let softwareContent = ref({
  //   items: [
  //     {
  //       sectionTitle: "Loading...",
  //       sectionText: "Loading...",
  //       carouselList: [
  //         {
  //           url: "Loading...",
  //           title: "Loading...",
  //           text: "Loading...",
  //         },
  //       ],
  //       link: {
  //         text: "Loading...",
  //         url: "Loading...",
  //       },
  //       version: "Loading...",
  //       platforms: "Loading...",
  //     },
  //   ],
  // });

  // const mydata = await getData();
  // softwareContent.value.items = mydata.reverse();
</script>

<template>
  <!-- <div
    v-for="(item, index) in softwareContent.items"
    :class="index + 1 == softwareContent.items.length ? '' : 'item'"
    :key="index"
  >
    <h1>{{ item.sectionTitle }}</h1>
    <p>{{ item.sectionText }}</p>
    <div v-if="item.carouselList != ''">
      <Carousel :list="item.carouselList"></Carousel>
    </div>
    <div class="info">
      <a class="call-to-action" :href="item.link.url" target="_blank">{{
        item.link.text
      }}</a>
      <p>Version: {{ item.version }}</p>
    </div>
  </div> -->
</template>

<style scoped>
  .item {
    border-style: solid;
    border-width: 0px 0px 8px 0px;
    border-color: var(--accent-1);
    padding-bottom: 32px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
