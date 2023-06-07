<script setup>
  import { ref, onMounted } from "vue";

  const sections = {
    title: "Loading...",
    content: "Loading...",
  };

  let profilePic = null;

  const getData = async () => {
    const response = await fetch(
      "https://content.vertigodigital.se/wp-json/wp/v2/pages/39"
    );
    const json = await response.json();
    // Create a temporary element
    let tempElement = document.createElement("div");

    // Set the content as the innerHTML of the temporary element
    tempElement.innerHTML = json.title.rendered;
    sections.title = tempElement.innerHTML;

    // Set the content as the innerHTML of the temporary element
    tempElement.innerHTML = json.content.rendered;
    sections.content = tempElement.innerHTML;

    if (json.featured_media != "") {
      profilePic = await getMediaById(json.featured_media);
    }
  };

  const getMediaById = async (id) => {
    const response = await fetch(
      "https://content.vertigodigital.se/wp-json/wp/v2/media/" + id
    );
    const json = await response.json();
    console.log(json);
    return json.source_url;
  };

  await getData();

  const textWidth = ref(0);
  const textHeight = ref(0);
  onMounted(() => {
    const slanted = document.querySelector(".slanted");
    textWidth.value = slanted.clientWidth + "px";
    textHeight.value = slanted.clientHeight + "px";
  });
</script>

<template>
  <div class="text-container">
    <div class="slanted-container">
      <div class="position-wrapper">
        <div class="slanted">
          <img v-if="profilePic != null" :src="profilePic" />
          <h1>
            {{ sections.title }}
            <!-- <div class="slanted-background"></div> -->
          </h1>
        </div>
      </div>
    </div>
    <div class="pagecontent" v-html="sections.content"></div>
  </div>
</template>

<style scoped>
  .slanted-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .position-wrapper {
    position: relative;
    width: v-bind(textWidth);
    height: v-bind(textHeight);
  }
  .slanted {
    position: absolute;
    display: flex;
    align-items: center;
    bottom: 10%;
    transform: rotate(-10deg);
  }
  .slanted-background {
    position: absolute;
    left: -5000px;
    top: 100%;
    border-style: dashed;
    border-width: 20px;
    border-bottom: 0;
    border-color: var(--color-palette-1);
    width: 10000px;
    height: 100px;
    z-index: -8;
  }

  img {
    width: 50px;
    height: 50px;
    aspect-ratio: 1/1;
    background: var(--color-palette-6);
    border-radius: 100%;
    margin: 10px;
  }

  .text-container {
    width: 80%;
  }
</style>
