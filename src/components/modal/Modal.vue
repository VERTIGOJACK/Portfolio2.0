<script setup>
  import { ref, onMounted } from "vue";
  const props = defineProps(["modalActive"]);
</script>

<template>
  <div class="base">
    <Transition name="modal-animation">
      <div v-show="modalActive" class="modal-outer">
        <Transition name="modal-animation-inner">
          <div v-show="modalActive" class="modal-inner">
            <button
              class="call-to-action close-button"
              @click="$emit('close-modal')">
              X
            </button>
            <slot></slot>
          </div>
        </Transition>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
  .base {
    position: relative;
    height: 100%;
    width: 100%;
  }
  .modal-outer {
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }
  .modal-inner {
    margin: auto;
    position: relative;
    background-color: var(--color-palette-3);
    padding: 10px;
    border-radius: 4px;
    filter: var(--common-shadow);
    max-width: 90%;
    max-height: 70%;
    height: 80%;
  }
  .close-button {
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    justify-items: flex-end;
    font-size: xx-large;
    border-radius: 4px;
    user-select: none;
    background-color: transparent;
    border-style: solid;
    border-color: var(--color-palette-6);
    color: var(--color-palette-6);
  }

  .close-button:hover {
    border-color: var(--color-palette-2);
    color: var(--color-palette-2);
  }

  .modal-animation-enter-active,
  .modal-animation-leave-active {
    transition: all 0.2s ease-in-out;
  }

  .modal-animation-enter-from,
  .modal-animation-leave-to {
    opacity: 0;
  }

  .modal-animation-inner-enter-active,
  .modal-animation-inner-leave-active {
    transition: all 0.3s ease-in-out;
  }

  .modal-animation-inner-enter-to,
  .modal-animation-inner-leave-from {
    opacity: 1;
    transform: scale(1);
  }

  .modal-animation-inner-enter-from,
  .modal-animation-inner-leave-to {
    opacity: 0;
    transform: scale(0.5);
  }
</style>
