<script setup>
import { ref, onMounted, watch, onUpdated } from "vue";

const sections = ref({
  title: "",
  content: "",
});

let profilePic = ref(null);

const getData = async () => {
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/pages/39"
  );
  const json = await response.json();
  // Create a temporary element
  let tempElement = document.createElement("div");

  // Set the content as the innerHTML of the temporary element
  tempElement.innerHTML = json.title.rendered;
  sections.value.title = tempElement.innerHTML;

  // Set the content as the innerHTML of the temporary element
  tempElement.innerHTML = json.content.rendered;
  sections.value.content = tempElement.innerHTML;

  if (json.featured_media != "") {
    profilePic.value = await getMediaById(json.featured_media);
  }
};

const getMediaById = async (id) => {
  const response = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/media/" + id
  );
  const json = await response.json();
  return json.source_url;
};

const textWidth = ref(0);
const textHeight = ref(0);

await getData();

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
.fallback {
  width: 100%;
}
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

img {
  width: 50px;
  height: 50px;
  aspect-ratio: 1/1;
  background: var(--accent-3);
  border-radius: 100%;
  margin: 10px;
}

.text-container {
  width: 80%;
}
</style>
