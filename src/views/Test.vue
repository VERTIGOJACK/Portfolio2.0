<script setup>
  import Carousel from "../components/carousel/Carousel.vue";

  let carouselList = [
    {
      url: "https://drive.google.com/uc?id=1aQWBd54AMBfVZsWkLSAtokBpo_-h440s",
      title: "",
      text: "",
    },
    {
      url: "https://drive.google.com/uc?id=1Dj06EOSN17DU34d5w6oPmqINRP0-5X5W",
      title: "",
      text: "",
    },
    {
      url: "https://drive.google.com/uc?id=1YiZewW5c145CDnPbfl9z92WDc-taWLle",
      title: "",
      text: "",
    },
  ];
</script>

<template>
  <Carousel :list="carouselList"></Carousel>
</template>
