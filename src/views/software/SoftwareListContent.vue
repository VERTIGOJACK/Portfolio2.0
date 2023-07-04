<script setup>
  import Carousel from "../../components/carousel/Carousel.vue";
  import { getDataList } from "./functions";
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";

  const classArray = ["blue", "red", "yellow"];

  const route = useRoute();

  let counter = 0;

  const CountClass = () => {
    let mClass = counter;
    counter >= 2 ? (counter = 0) : counter++;
    return classArray[mClass];
  };

  let softwareContent = ref({
    items: [
      {
        title: "Loading...",
        platforms: "Loading...",
        id: "Loading...",
        image: "Loading...",
      },
    ],
  });
  //fetch api
  const mydata = await getDataList();
  //replace dummy data
  softwareContent.value.items = mydata.reverse();
</script>

<template>
  <div class="softwareouter">
    <div class="grid">
      <div
        v-for="(item, index) in softwareContent.items"
        class="item"
        :key="index">
        <router-link :to="route.fullPath + '/item/' + item.id">
          <div
            class="softwarebox"
            :style="{ 'background-image': 'url(' + item.image + ')' }">
            <div class="info" :class="CountClass()">
              <h1>{{ item.title }}</h1>
              <p>{{ item.platforms }}</p>
            </div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .softwareouter {
    /* width: calc(100% - calc(var(--lengths-md-2) * 2)); */
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: var(--lengths-md-2);
    width: 100%;
  }
  .item {
    /* width: var(--lengths-lg-2);
    height: var(--lengths-lg-2); */
    aspect-ratio: 1/1;
    filter: var(--common-shadow);
  }

  .softwarebox {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    border-radius: var(--lengths-md-2);
    cursor: pointer;
    overflow: hidden;
  }

  h1 {
    font-size: larger;
  }

  h1,
  p {
    padding: 0;
    margin: 0;
    text-align: center;
    color: var(--monochrome-1);
    filter: var(--common-shadow);
    user-select: none;
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: var(--lengths-md-2);
    padding-bottom: var(--lengths-md-2);
    background: var(--transparent-25);

    height: 100%;
    width: 100%;
  }
  .red,
  .blue,
  .yellow {
    opacity: 0.9;
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
