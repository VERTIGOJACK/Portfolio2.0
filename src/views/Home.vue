<script setup>
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
</script>

<template>
  <div id="home">
    <!-- three js thing here instead of hero probably -->
    <div class="hero"></div>
    <div class="text-container">
      <h1>{{ sections.title }}</h1>
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
  }

  .hero {
    height: 400px;
  }
  .text-container {
    width: 80%;
  }
</style>
