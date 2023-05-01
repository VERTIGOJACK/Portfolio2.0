<script setup>
  import Herothree from "../components/herothree/Herothree.vue";
  import { ref, onMounted } from "vue";
  const sections = {
    title: "Hi, i'm Sebastian",
    sections: [
      {
        sectionTitle: "",
        sectionText: `Currently pursuing a Bachelor's degree in Systems Development and Informatics at University West, 
        I have the technical expertise necessary for your success in the digital world.
        Beyond my academic pursuits, I have over a decade of hands-on experience in digital audio and several years of experience
        in both 2D and 3D graphics.<br><br> I'm eager to put these skills to work and excel in roles such as fullstack developer, 
        sound engineer, graphic artist, or any combination thereof. My ultimate goal is to provide top-notch 
        operations support and help drive your success in the digital realm.`,
      },
      {
        sectionTitle: "What i do:",
        sectionText:
          "With a discerning eye for quality, an unwavering work ethic, and a talent for creative problem-solving, i strive to deliver results that exceed expectations. I don't rely on specific tools or software, instead, I work within any limitations to produce high-quality work.<br><br> Whether you're looking to enhance your brand, streamline your processes, or tackle a tough challenge, I'm ready to bring my skills and expertise to the table.",
      },
    ],
  };

  const textWidth = ref(0);
  const textHeight = ref(0);
  onMounted(() => {
    const slanted = document.querySelector(".slanted");
    textWidth.value = slanted.clientWidth + "px";
    textHeight.value = slanted.clientHeight + "px";
  });
</script>

<template>
  <div id="home">
    <!-- three js thing here instead of hero probably -->
    <div class="hero">
      <Herothree></Herothree>
    </div>
    <div class="text-container">
      <div class="slanted-container">
        <div class="position-wrapper">
          <h1 class="slanted">
            {{ sections.title }}
            <!-- <div class="slanted-background"></div> -->
          </h1>
        </div>
      </div>
      <div v-for="section in sections.sections">
        <h2 v-if="section.sectionTitle != ''">{{ section.sectionTitle }}</h2>
        <p v-html="section.sectionText"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  #home {
    display: flex;
    align-items: center;
    flex-direction: column;
    overflow: hidden;
  }

  .slanted-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }

  .position-wrapper {
    position: relative;
    width: v-bind(textWidth);
    height: v-bind(textHeight);
  }
  .slanted {
    position: absolute;
    bottom: 10%;

    transform: rotate(-10deg);
  }
  .slanted-background {
    position: absolute;
    left: -5000px;
    top: 100%;
    border-style: dashed;
    border-width: 20px;
    border-bottom: 0;
    border-color: var(--color-palette-1);
    width: 10000px;
    height: 100px;
    z-index: -8;
  }

  .hero {
    height: 500px;
  }
  .text-container {
    width: 80%;
  }
</style>
