<script setup>
  import { ref } from "vue";
  import Hamburger from "./Hamburger.vue";
  const isMenuOpen = ref(false);

  const menuOptions = [
    { text: "Home", link: "/" },
    { text: "Software", link: "/software" },
    { text: "Graphics", link: "/graphics" },
    { text: "Music", link: "/music" },
    { text: "Blog", link: "/blog" },
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
      <Hamburger
        class="hamburger"
        @click="ToggleMenu"
        :active="isMenuOpen"></Hamburger>
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
    --background: var(--monochrome-1);
    --background-hover: var(--monochrome-1);
    --link: var(--monochrome-1);
    --link-hover: var(--monochrome-2);
    --logo: var(--monochrome-5);
    --logo-hover: var(--monochrome-4);

    font-size: x-large;
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
    backdrop-filter: blur(10px);
  }

  .logo {
    display: flex;
    align-items: center;
    margin: 0;
    padding: 0;
    width: 35px;
    color: var(--logo);
    transition: all 0.1s ease-in-out;
  }

  .logo-text {
    display: flex;
    align-items: center;
    margin: 0;
    padding: var(--lengths-md-2);
    width: auto;
    color: var(--logo);
    transition: all 0.1s ease-in-out;
  }

  .hamburger {
    padding: var(--lengths-md-2);
  }
  .logo-text:hover {
    color: var(--logo-hover);
  }

  .links {
    position: absolute;
    display: flex;
    flex-direction: column;
    transform-origin: top right;
    right: 0;
    backdrop-filter: blur(10px);
    transform: translateY(-100%);
    z-index: -1;
    transition: all 0.3s ease-in-out;
    background-color: var(--transparent-25);
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
    color: var(--link);
  }

  .links a:hover {
    color: var(--link-hover);
  }

  .show {
    transform: translateY(0%);
  }

  .logo {
    padding: 10px;
  }
</style>
