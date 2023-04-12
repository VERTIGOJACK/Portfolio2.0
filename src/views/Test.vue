<script setup>
  import { ref } from "vue";
  import Modal from "../components/modal/Modal.vue";
  const modalActive = ref(false);
</script>

<template>
      <h1>ping pong goofy boiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
    <h2>hey hoy ya bingus</h2>
    <p>heyioyoyooyooyoyooyooy</p>
  <button class="call-to-action" @click="modalActive = true">Open Modal</button>
  <Modal :modal-active="modalActive" @close-modal="modalActive = false">
    <h1>ping pong goofy boiiiiiiiiiiiiii iiiiiiiiiiiiiiiiiiiiiiiiiii</h1>
    <h2>hey hoy ya bingus</h2>
    <p>heyioyoyooyooyoyooyooy</p>
  </Modal>
</template>
