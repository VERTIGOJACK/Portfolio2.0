<script setup>
  const sections = {
    title: "Hi, i'm Sebastian",
    sections: [
      {
        sectionTitle: "",
        sectionText:
          "I´m studying bachelor's degree level systems development and informatics at Univeristy West. Degrees aside, i have over ten years of experience in digital audio, and several years of experience in both 2D and 3D graphics.My aim is to be your operations future fullstack developer, sound engineer, graphic artist, or all of the above.",
      },
      {
        sectionTitle: "What i do:",
        sectionText:
          "I provide excellent taste, peerless work ethic, and a problem solving mindset. Neither bound by specific tools nor software, i will work within the limitations given to produce above and beyond results.",
      },
    ],
  };
</script>

<template>
  <div id="home">
    <!-- three js thing here instead of hero probably -->
    <div class="hero"></div>
    <div class="text-container">
      <h1>{{ sections.title }}</h1>
      <div v-for="section in sections.sections">
        <h2 v-if="section.sectionTitle != ''">{{ section.sectionTitle }}</h2>
        <p>{{ section.sectionText }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #home {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .hero {
    height: 400px;
  }
  .text-container {
    width: 80%;
  }
</style>
