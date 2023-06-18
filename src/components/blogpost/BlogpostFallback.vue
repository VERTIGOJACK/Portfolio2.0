<script setup>
  import Postmeta from "./Postmeta.vue";

  const lorem = `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sint
    ullam, velit et perferendis nostrum corporis illum in, culpa ipsa ex omnis
    error minima unde nobis fuga? Sapiente, voluptatem labore animi earum est
    modi aspernatur deleniti quasi harum sint rem.
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur sint
    ullam, velit et perferendis nostrum corporis illum in, culpa ipsa ex omnis
    error minima unde nobis fuga? Sapiente, voluptatem labore animi earum est
    modi aspernatur deleniti quasi harum sint rem.`;
  const randLorem = (min, max) => {
    const rand = Math.floor(Math.random() * (max - min) + min);
    const array = lorem.split(" ");
    const sliced = array.slice(min, rand);
    return sliced.join(" ");
  };
</script>
<template>
  <h1 class="loading">Lorem ipsum</h1>
  <Postmeta :fallback="true"></Postmeta>
  <p v-for="number in 15" class="loading">
    {{ randLorem(20, 60) }}
  </p>
</template>

<style scoped>
  #blogpost,
  #fallback {
    width: 80%;
  }
</style>
