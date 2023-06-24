<script setup>
import { ref, watch } from "vue";
const searchText = ref("");
</script>

<template>
  <div class="outer">
    <section>
      <div class="icon">
        <i class="fa fa-search" aria-hidden="true"></i>
      </div>
      <input
        v-model="searchText"
        type="text"
        name="search"
        id="search"
        @input="$emit('search', searchText)"
      />
    </section>
  </div>
</template>

<style scoped>
.outer {
  display: flex;
  justify-content: start;
  width: 100%;
  background-color: var(--monochrome-1);
}

section {
  display: flex;
  width: var(--lengths-lg-2);
  height: var(--lengths-md-3);
  margin: 0;
  padding: 0;
  border: solid var(--lengths-sm-1) var(--accent-1);
  border-radius: var(--lengths-md-3);
  overflow: hidden;
  align-items: center;
}

section * {
  margin: 0;
  padding: 0;
}

.icon {
  color: var(--accent-1);
  padding: var(--lengths-md-2);
  border-right: var(--lengths-sm-1) solid var(--accent-1);
}

input {
  width: 100%;
  height: 100%;
  border: none;
}
</style>
