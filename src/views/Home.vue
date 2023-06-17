<script setup>
import Clock from "../components/clock/Clock.vue";
import Herothree from "../components/herothree/Herothree.vue";
import HomeContent from "../components/home/HomeContent.vue";
import SocialStack from "../components/social/SocialStack.vue";
import SwirlDiv from "../components/customdiv/SwirlDiv.vue";
import SocialStackFallback from "../components/social/SocialStackFallback.vue";
</script>

<template>
  <div class="pagecontainer">
    <div id="home" class="pagerestrict">
      <SwirlDiv class="hero">
        <Clock class="clock"></Clock>
        <Herothree></Herothree>
      </SwirlDiv>
      <SwirlDiv class="swirl">
        <HomeContent></HomeContent>
      </SwirlDiv>

      <div class="social">
        <Suspense>
          <SocialStack></SocialStack>
          <template #fallback>
            <SocialStackFallback></SocialStackFallback>
          </template>
        </Suspense>
      </div>
    </div>
  </div>
</template>

<style scoped>
.swirl {
  position: relative;
  display: flex;
  justify-content: center;
  padding-bottom: var(--lengths-lg-2);
  width: 100%;
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
  background: linear-gradient(
      to top left,
      transparent,
      rgba(255, 153, 150, 0),
      var(--accent-1)
    ),
    linear-gradient(
        to top right,
        transparent,
        rgba(255, 153, 150, 0),
        var(--accent-2)
      )
      var(--accent-3);
}
.clock {
  position: absolute;
}

.social {
  padding-bottom: var(--lengths-md-3);
  width: 80%;
}
</style>
