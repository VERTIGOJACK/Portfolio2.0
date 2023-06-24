<script setup>
import Clock from "../components/clock/Clock.vue";
import Herothree from "../components/herothree/Herothree.vue";
import HomeContent from "../components/home/HomeContent.vue";
import SwirlDiv from "../components/general/div/SwirlDiv.vue";
import CenterDiv from "../components/general/div/CenterDiv.vue";
import PageTemplate from "../components/general/page/PageTemplate.vue";
</script>

<template>
  <PageTemplate>
    <SwirlDiv>
      <div class="hero">
        <div class="hero-background "></div>
        <Clock class="clock"></Clock>
        <Herothree></Herothree>
      </div>
    </SwirlDiv>
    <CenterDiv bottom="true">
      <HomeContent></HomeContent>
    </CenterDiv>
  </PageTemplate>
</template>

<style scoped>
  .swirl {
    position: relative;
    display: flex;
    justify-content: center;
    padding-bottom: var(--lengths-lg-2);
    width: 100%;
  }

.innerpage {
  padding-bottom: var(--lengths-lg-1);
  width: 80%;
}

#home {
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: hidden;
}

.hero {
  position: relative;
  height: var(--lengths-lg-3);
  width: 100%;
  overflow: hidden;
}

.hero-background {
  z-index: -1;
  width: 100%;
  height: 100%;
  left: -50%;
  top: -50%;
  transform: translate(50%, 50%);
  transform-origin: center;
  position: absolute;
  background: var(--custom-gradient);
  animation: rotate linear forwards 5s infinite;
}

@keyframes rotate {
  0% {
    transform: translate(50%, 50%) scale(2) rotateZ(0deg);
  }
  100% {
    transform: translate(50%, 50%) scale(2) rotateZ(360deg);
  }
}

.clock {
  position: absolute;
}

.social {
  padding-bottom: var(--lengths-md-3);
}
</style>
