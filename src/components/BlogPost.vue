<script setup>
import { ref, onMounted, onUpdated } from "vue";
import hljs from "highlight.js";
const content = ref({ title: "", content: "" });

onMounted(async () => {
  const res = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/posts/102"
  );
  const json = await res.json();
  content.value.title = json.title.rendered;
  content.value.content = json.content.rendered;
});

onUpdated(() => {
  hljs.highlightAll();
});
</script>
<template>
  <div class="pagecontainer">
    <div id="blogpost">
      <h1 v-html="content.title"></h1>
      <div v-html="content.content"></div>
    </div>
  </div>
</template>
<style scoped>
#blogpost {
  width: 80%;
}
</style>
