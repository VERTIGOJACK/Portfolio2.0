<script setup>
import Carousel from "../../../components/carousel/Carousel.vue";
import { getDataSingle } from "../functions";
import { ref, onMounted } from "vue";

const props = defineProps({ softwareid: "" });

const classArray = ["blue", "red", "yellow"];

let counter = 0;

const CountClass = () => {
  let mClass = counter;
  counter >= 2 ? (counter = 0) : counter++;
  return classArray[mClass];
};

let content = ref({
  featuredImage: "/VDD.svg",
  technologies: [
    "Vue",
    "VS",
    "Three.js",
    "Vue",
    "VS",
    "Three.js",
    "Vue",
    "VS",
    "Three.js",
  ],
  sectionTitle: "Title",
  sectionText: "description lorem lorem lorem lorem lorem lorem lorem",
  carouselList: [
    {
      url: "/VDD.svg",
      title: "",
      text: "",
    },
  ],
  link: {
    text: "Button Text",
    url: "Loading...",
  },
  version: "1.0",
  platforms: "Web",
});

const changeClass = (e) => {
  const test = document.createElement("div");
  e.target.classList.toggle("rainbow-border");
};

const mydata = await getDataSingle(props.softwareid);
content.value = mydata;
console.log(content.value);
</script>

<template>
  <div class="item">
    <div class="title">
      <img :src="content.featuredImage.url" alt="" />
      <h1>{{ content.title }}</h1>
    </div>
    <p>{{ content.description }}</p>
    <div class="technologies">
      <p
        v-for="item in content.technologies"
        class="technology"
        :class="CountClass()"
      >
        {{ item.name }}
      </p>
    </div>
    <div v-if="content.carouselList != ''">
      <Carousel :list="content.carouselList"></Carousel>
    </div>
    <div class="info">
      <a
        class="call-to-action"
        @mouseenter="(e) => changeClass(e)"
        @mouseleave="(e) => changeClass(e)"
        :href="content.link.url"
        target="_blank"
        ><div>{{ content.link.text }}</div></a
      >
      <p>Version: {{ content.version }}</p>
    </div>
  </div>
</template>

<style scoped>
h1 {
  margin-bottom: 0;
  margin-top: 0;
}
.title {
  margin-top: var(--lengths-md-3);
  display: flex;
  justify-content: start;
  align-items: center;
}
.title img {
  height: 3rem;
  aspect-ratio: 1/1;
  border-radius: 100%;
  margin-right: var(--lengths-sm-2);
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.technologies {
  display: flex;
  gap: var(--lengths-sm-2);
  flex-wrap: wrap;
  margin-bottom: 1rem;
}
.technology {
  border-radius: var(--lengths-sm-2);
  padding: var(--lengths-sm-1);
  color: var(--monochrome-1);
  margin: 0;
}
.technology * {
  margin: 0;
  padding: 0;
}
.blue {
  background-color: var(--accent-1);
}
.red {
  background-color: var(--accent-2);
}
.yellow {
  background-color: var(--accent-3);
}
</style>
