<script setup>
  import Carousel from "../carousel/Carousel.vue";
  import { getData } from "./functions";

  let softwareContent = {
    title: "Software and Web",
    description: `Although programming and coding is a relatively new pursuit for me,
      i see the possibilities it offers for building in the digital realm. Developing websites,
      applications, and other digital projects has become a true passion of mine. <br><br>
      In fact, this very website is just one of many projects I've had the pleasure of working on.
      Whether working independently or as part of a team,
      i bring passion and dedication to quality for every project.`,
    items: [
      {
        sectionTitle: "Loading...",
        sectionText: "Loading...",
        carouselList: [
          {
            url: "Loading...",
            title: "Loading...",
            text: "Loading...",
          },
        ],
        link: {
          text: "Loading...",
          url: "Loading...",
        },
        version: "Loading...",
        platforms: "Loading...",
      },
    ],
  };

  const mydata = await getData();
  softwareContent.items = mydata.reverse();
  
</script>

<template>
  <div class="items-container">
    <div
      v-for="(item, index) in softwareContent.items"
      :class="index + 1 == softwareContent.items.length ? '' : 'item'"
      :key="index">
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
    </div>
  </div>
</template>

<style scoped>
  .items-container {
    width: 80%;
  }

  .item {
    border-style: solid;
    border-width: 0px 0px 8px 0px;
    border-color: var(--color-palette-3);
    filter: var(--common-shadow);
    padding-bottom: 32px;
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .call-to-action {
    background-color: var(--color-palette-1);
    filter: var(--common-shadow);
    border-radius: 3px;
    padding: 4px;
    transition: all 0.2s ease-in-out;
  }

  .call-to-action:hover {
    background-color: var(--color-palette-2);
    color: var(--color-palette-6);
    filter: var(--common-shadow);
    transform: scale(1.05);
  }
</style>
