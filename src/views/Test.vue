<script setup>
  import { ref, onMounted } from "vue";
  import Blogpost from "../components/blogpost/Blogpost.vue";
</script>

<template>
  <div class="pagecontainer">
    <div class="pagerestrict">
      <Blogpost></Blogpost>
    </div>
  </div>
</template>
