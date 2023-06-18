<script setup>
  import { ref, onMounted } from "vue";

  const props = defineProps({
    fontawesomeicon: "",
    link: "",
    name: "",
    labelclass: "",
    linkclass: "",
  });
  const type = ref("");

  onMounted(() => {
    //check for type
    //type can be link or mail
    if (props.link.includes("@")) {
      type.value = "mail";
    } else {
      type.value = "link";
    }
  });
</script>

<template>
  <section class="container">
    <div class="top" :class="labelclass">
      <i :class="props.fontawesomeicon"></i>
      <h1 class="name">{{ props.name }}</h1>
    </div>
    <a v-if="type == 'link'" :href="props.link" target="_blank">{{
      props.link
    }}</a>
    <a v-if="type == 'mail'" :href="'mailto:' + props.link">{{ props.link }}</a>
  </section>
</template>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    width: auto;
    height: 40px;
    padding: 4px;
  }

  .top {
    display: flex;
    align-items: center;
    margin: 0px;
    color: var(--color-palette-2);
    border-bottom: 1px solid;
    width: fit-content;
    margin-bottom: 2px;
  }

  h1 {
    font-size: 1rem;
    margin: 0px;
    margin-left: 4px;
  }

  .blue {
    color: var(--accent-1);
  }
  .red {
    color: var(--accent-2);
  }
  .yellow {
    color: var(--accent-3);
  }
  
</style>
