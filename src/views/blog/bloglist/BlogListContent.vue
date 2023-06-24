<script setup>
  import { ref, onMounted } from "vue";
  import { useRoute } from "vue-router";
  import formatDateTime from "../../../components/helper/formatDateTime";

  const posts = ref([
    {
      link: "",
      date: "",
      titleHtml: "",
      excerptHtml: "",
      categories: "",
      tags: "",
    },
  ]);

  const route = useRoute();

  //api call to get a list of blog posts,
  const res = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/posts"
  );

  const json = await res.json();

  const data = await json.map(async (post) => {
    //get categories
    let categories = [];

    post.categories.forEach(async (element) => {
      const cat = await fetch(
        "https://content.vertigodigital.se/wp-json/wp/v2/categories/" + element
      );
      const catjson = await cat.json();
      categories.push(catjson.name);
    });

    //get tags
    let tags = [];

    post.tags.forEach(async (element) => {
      const tag = await fetch(
        "https://content.vertigodigital.se/wp-json/wp/v2/tags/" + element
      );
      const tagjson = await tag.json();
      tags.push(tagjson.name);
    });

    const returnData = {
      link: route.fullPath + "/post/" + post.id,
      date: formatDateTime(post.date),
      titleHtml: post.title.rendered,
      excerptHtml: post.excerpt.rendered,
      category: categories,
      tag: tags,
    };
    return returnData;
  });

  posts.value = await Promise.all(data);
  // });
  //and then create a bunch of router links
</script>

<template>
  <div class="post" v-for="item in posts">
    <router-link :to="item.link">
      <h1 v-html="item.titleHtml" @mouseover=""></h1>
      <p v-html="item.excerptHtml"></p>
      <div class="tags"></div>
    </router-link>
  </div>
</template>

<style scoped>
  .post h1 {
    transition: all 0.1s ease-in-out;
  }

  .post:hover h1 {
    transform: scale(1.01);
    color: var(--accent-1);
  }

  h1 {
    font-size: large;
  }

  p {
    font-size: small;
  }
</style>
