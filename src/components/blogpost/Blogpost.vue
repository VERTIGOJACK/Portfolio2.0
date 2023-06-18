<script setup>
  import { ref, onMounted, onUpdated } from "vue";
  import hljs from "highlight.js";
  import BlogpostFallback from "./BlogpostFallback.vue";
  import Postmeta from "./Postmeta.vue";
  import SwirlDiv from "../customdiv/SwirlDiv.vue";
  const content = ref({ title: "", content: "", featuredMedia: "" });
  const meta = ref({
    authorName: "",
    authorImage: "",
    publishDate: "",
    editDate: "",
  });
  const loaded = ref(false);

  const formatDateTime = (string) => {
    const dateTime = string.split("T");
    // dateTime[1] = dateTime[1].substring(0, 4);
    return dateTime[0];
  };

  onMounted(async () => {
    let res = await fetch(
      "https://content.vertigodigital.se/wp-json/wp/v2/posts/102"
    );
    let json = await res.json();
    //set content
    content.value.title = json.title.rendered;
    content.value.content = json.content.rendered;
    //set meta
    //date
    meta.value.publishDate = formatDateTime(json.date);
    meta.value.editDate = formatDateTime(json.modified);
    //author roundtrip
    res = await fetch(
      "https://content.vertigodigital.se/wp-json/wp/v2/users/1"
    );
    json = await res.json();

    meta.value.authorName = json.name;
    meta.value.authorImage = json.avatar_urls["24"];

    loaded.value = true;
  });

  onUpdated(() => {
    hljs.highlightAll();
  });
</script>
<template>
  <SwirlDiv v-if="loaded" class="swirl">
    <div class="pagecontainer">
      <div v-if="loaded" class="blogpost">
        <h1 v-html="content.title"></h1>
        <Postmeta
          :name="meta.authorName"
          :avatar="meta.authorImage"
          :published="meta.publishDate"
          :edited="meta.editDate"></Postmeta>
      </div>
    </div>
  </SwirlDiv>
  <div class="pagecontainer">
    <div v-if="loaded" class="blogpost">
      <div v-html="content.content"></div>
    </div>

    <div v-if="!loaded" id="fallback">
      <BlogpostFallback></BlogpostFallback>
    </div>
  </div>
</template>

<style scoped>
  .blogpost,
  #fallback {
    width: 80%;
  }

  .swirl {
    position: relative;
    padding-bottom: var(--lengths-lg-1);
    justify-content: center;

    width: 100%;
  }
</style>
