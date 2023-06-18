<script setup>
  import { ref, onMounted } from "vue";
  import { useRouter } from "vue-router";
  import Blogpost from "../components/blogpost/Blogpost.vue";

  const router = useRouter();
</script>

<template>
  <div class="pagecontainer">
    <div class="pagerestrict">
      <Blogpost :postid="router.currentRoute.value.params.id"></Blogpost>
    </div>
  </div>
</template>
