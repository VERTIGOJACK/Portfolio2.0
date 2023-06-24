<script setup>
import { ref, onMounted, onUpdated } from "vue";
import hljs from "highlight.js";
import Postmeta from "./Postmeta.vue";
import SwirlDiv from "../../../components/general/div/SwirlDiv.vue";
import formatDateTime from "../../../components/helper/formatDateTime";

const props = defineProps({ postid: "" });
const content = ref({ title: "", content: "", featuredMedia: "" });
const meta = ref({
  authorName: "",
  authorImage: "",
  publishDate: "",
  editDate: "",
});

onMounted(async () => {
  let res = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/posts/" + props.postid
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
  res = await fetch("https://content.vertigodigital.se/wp-json/wp/v2/users/1");
  json = await res.json();

  meta.value.authorName = json.name;
  meta.value.authorImage = json.avatar_urls["48"];

  
});

onUpdated(() => {
  hljs.highlightAll();
});
</script>
<template>
  <SwirlDiv class="swirl">
    <div class="pagecontainer">
      <div  class="blogpost">
        <h1 v-html="content.title"></h1>
        <Postmeta
          :name="meta.authorName"
          :avatar="meta.authorImage"
          :published="meta.publishDate"
          :edited="meta.editDate"
        ></Postmeta>
      </div>
    </div>
  </SwirlDiv>
  <div class="pagecontainer">
    <div class="blogpost">
      <div v-html="content.content"></div>
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
