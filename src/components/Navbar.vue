<script setup>
  import { ref } from "vue";
  import Hamburger from "./Hamburger.vue";
  const isMenuOpen = ref(false);

  const menuOptions = [
    { text: "Software", link: "/software" },
    { text: "Graphics", link: "/graphics" },
    { text: "Music", link: "/music" },
    { text: "Contact", link: "/contact" },
    { text: "Test", link: "/test" },
  ];

  const ToggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
  };
</script>

<template>
  <nav id="top-nav">
    <div class="navbar-content">
      <router-link to="/" class="logo-text" @click="isMenuOpen = false">
        VERTIGODIGITAL.
      </router-link>
      <Hamburger @click="ToggleMenu" :active="isMenuOpen"></Hamburger>
    </div>
    <div class="links" :class="isMenuOpen ? 'show' : ''">
      <router-link
        @click="ToggleMenu()"
        v-for="option in menuOptions"
        :to="option.link"
        >{{ option.text }}</router-link
      >
    </div>
  </nav>
</template>

<style scoped>
  #top-nav {
    --background: var(--color-palette-3);
    --altbackground: var(--color-palette-4);
    --althover: var(--color-palette-5);
    font-family: var(--font5);
    font-size: x-large;
    filter: var(--common-shadow);
    z-index: 100;
  }

  nav {
    width: 100%;
    height: auto;
  }
  .navbar-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--background);
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 35px;
    color: var(--color-palette-6);
    transition: all 0.1s ease-in-out;
  }

  .logo-text {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 10px;
    width: auto;
    color: var(--color-palette-6);
    transition: all 0.1s ease-in-out;
  }
  .logo-text:hover {
    color: var(--color-palette-2);
  }

  .links {
    position: absolute;
    display: flex;
    flex-direction: column;
    transform-origin: top right;
    right: 0;
    background-color: var(--altbackground);
    transform: translateY(-100%);
    z-index: -1;
    transition: all 0.3s ease-in-out;
    width: 100%;
  }

  a {
    width: 100%;
    display: flex;
    justify-content: center;
  }

  .links a {
    padding-top: 20px;
    padding-bottom: 20px;
    transition: all ease-in-out 0.1s;
  }

  .links a:hover {
    background-color: var(--althover);
  }

  .show {
    transform: translateY(0%);
  }

  .logo {
    padding: 10px;
  }
</style>
