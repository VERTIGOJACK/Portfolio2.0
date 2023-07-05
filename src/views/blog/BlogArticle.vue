<script setup>
  import { useRouter } from "vue-router";
  import Blogpost from "./blogpost/Blogpost.vue";
  import PageTemplate from "../../components/general/page/PageTemplate.vue";
  const router = useRouter();
</script>

<template>
  <PageTemplate> 
      <Blogpost :postid="router.currentRoute.value.params.id"></Blogpost>
  </PageTemplate>
</template>
