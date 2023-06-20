<script setup>
import randLorem from "./randLorem";
</script>

<template>
  <p class="loading">{{ randLorem(20, 60) }}</p>
</template>
