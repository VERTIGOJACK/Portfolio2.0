<script setup>
  import Carousel from "../components/carousel/Carousel.vue";
  const softwareContent = {
    title: "Software and Web",
    description: `Although programming and coding is a relatively new pursuit for me,
      i see the possibilities it offers for building in the digital realm. Developing websites,
      applications, and other digital projects has become a true passion of mine. <br><br>
      In fact, this very website is just one of many projects I've had the pleasure of working on.
      Whether working independently or as part of a team,
      i bring passion and dedication to quality for every project.`,
    items: [
      {
        sectionTitle: "Gymcat Timer",
        sectionText:
          "Gymcat Timer is an Android workout timer with session logging. The application was developed as a student project for the course 'Android Programming with Java'.",
        carouselList: [
          {
            url: "https://drive.google.com/uc?id=1aQWBd54AMBfVZsWkLSAtokBpo_-h440s",
            title: "Stay motivated",
            text: "GymCat is your new virtual gym buddy! This cute and friendly cat will help you stay motivated and on track during your workouts.",
          },
          {
            url: "https://drive.google.com/uc?id=1Dj06EOSN17DU34d5w6oPmqINRP0-5X5W",
            title: "High five!",
            text: "Enjoy a fun and engaging workout experience that will keep you coming back for more. With GymCat by your side, you'll never have to exercise alone again!",
          },
          {
            url: "https://drive.google.com/uc?id=1YiZewW5c145CDnPbfl9z92WDc-taWLle",
            title: "Stay consistent",
            text: "View detailed statistics on your workouts, including the total time spent exercising, the number of calories burned, and more.",
          },
        ],
        link: {
          text: "Download APK",
          url: "https://drive.google.com/uc?export=download&id=1K6Oy1y3iBE9Eu0bmhb5_VlhYcrgByUAb",
        },
        version: "1.1",
      },
      {
        sectionTitle: "Harvard Reference",
        sectionText:
          "Harvard Reference is a (swedish) web-based tool that uses a form to gather necessary information and generates references based on the Harvard referencing system.",
        carouselList: [
          {
            url: "https://drive.google.com/uc?id=1oX34AlbO8r-yD11PTmyPclBrWr3qP9am",
            title: "Save time",
            text: "Efficient essay writing means no more switching back-and-forth between referencing guides. Automate your references with ease!",
          },
          {
            url: "https://drive.google.com/uc?id=15lMlvDPsXWVWvylO4XuC_b_afAYIqznh",
            title: "Do it now!",
            text: "Eliminate last-minute referencing stress. Format your references immediately and never worry again.",
          },
        ],
        link: {
          text: "Go to site",
          url: "https://referenceformatter.pages.dev/",
        },
        version: "WIP",
      },
    ],
  };
</script>

<template>
  <div id="software">
    <!-- <div class="outer">
      <div class="text-container">
        <h1>{{ softwareContent.title }}</h1>
        <p v-html="softwareContent.description"></p>
      </div>
    </div> -->
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
          <a class="call-to-action" :href="item.link.url">{{
            item.link.text
          }}</a>
          <p>Version: {{ item.version }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #software {
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: var(--color-palette-3);
  }

  .hero {
    height: 400px;
  }
  .outer {
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: var(--color-palette-3);
    filter: var(--common-shadow);
  }
  .text-container {
    width: 80%;
  }

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
