<script setup>
  const props = defineProps({
    name: "",
    avatar: "",
    published: "",
    edited: "",
  });
</script>

<template>
  <div id="container">
    <div class="author">
      <img :src="avatar" alt="" />
      <div class="details">
        <p class="name">{{ name }}</p>
        <p class="published">{{ published }}</p>
      </div>
    </div>
    <div class="edit">
      <p v-if="edited == published" class="edited">Edited: {{ edited }}</p>
    </div>
  </div>
</template>

<style scoped>
  #container {
    display: flex;
    justify-content: space-between;
    align-items: start;
    width: 100%;
  }
  p {
    padding: var(--lengths-sm-1);
    margin: var(--lengths-sm-1);
  }

  .author {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: var(--lengths-sm-3);
  }

  .name {
    text-transform: uppercase;
    font-weight: bold;
  }

  .published {
    text-transform: uppercase;
    font-style: italic;
  }

  .edit {
    font-size: small;
  }

  .author img {
    height: 42px;
    width: 42px;
    border-radius: 100%;

    box-shadow: 0 0 0 var(--lengths-sm-1) var(--accent-2),
      0 0 0 calc(var(--lengths-sm-1) * 2) var(--accent-3),
      0 0 0 calc(var(--lengths-sm-1) * 3) var(--accent-1);
  }

  .post {
    display: flex;
    justify-content: space-between;
  }

</style>
