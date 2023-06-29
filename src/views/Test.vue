<script setup>
  import { ref, onMounted, onUnmounted } from "vue";
  import PageTemplate from "../components/general/page/PageTemplate.vue";
  import CenterDiv from "../components/general/div/CenterDiv.vue";
  import Visualizer from "../components/visualizer/Visualizer.vue";
  import { secondsToTimeFormat } from "../components/helper/secondsToTimeformat.js";
  const audio = ref(new Audio());
  const currentTime = ref(audio.value.currentTime);
  const audioData = ref({ title: "B2B", artist: "VERTIGOJACK" });
  const rotateVector = ref({ x: 0, y: 0 });
  audio.value.src = "/VERTIGOJACK - B2B.mp3";

  const togglePlay = () => {
    if (audio.value.paused) {
      audio.value.play();
    } else {
      audio.value.pause();
    }
  };

  const next = () => {
    audio.value.src = "/VERTIGOJACK - B2B.mp3";
    audio.value.play();
  };
  const previous = () => {
    audio.value.src = "/VERTIGOJACK - B2B.mp3";
    audio.value.play();
  };

  onMounted(() => {
    const playerElement = document.getElementById("player");
    const spaceElement = document.getElementById("space");

    audio.value.addEventListener("timeupdate", () => {
      currentTime.value = audio.value.currentTime;
    });

    spaceElement.addEventListener("mousemove", (e) => {
      console.log(e);
      rotateVector.value.x =
        (e.pageX - spaceElement.offsetWidth / 2) /
        (spaceElement.offsetWidth / 2);
      rotateVector.value.y =
        (e.pageY - spaceElement.offsetHeight / 2) /
        (spaceElement.offsetHeight / 2);
      playerElement.style.transform = `perspective(800px) rotateY(${
        rotateVector.value.x * 20
      }deg) rotateX(${rotateVector.value.y * 20 * -1}deg)`;
    });
  });

  onUnmounted(() => {
    audio.value = "";
  });
</script>

<template>
  <PageTemplate>
    <CenterDiv id="space" bottom="true">
      <div class="center">
        <div id="player" class="player-container rainbow-border">
          <div class="visualiser-container">
            <Visualizer :audioSource="audio"></Visualizer>
          </div>
          <div class="data-container">
            <h1>{{ audioData.title }}</h1>
            <p>{{ audioData.artist }}</p>
          </div>
          <div class="controls-container">
            <div class="seekbar">
              <p class="current-time">{{ secondsToTimeFormat(currentTime) }}</p>
              <input
                type="range"
                :min="0"
                :max="audio.duration"
                v-model="currentTime"
                @input="(e) => (audio.currentTime = e.target.value)" />
              <p class="total-time">
                {{ secondsToTimeFormat(audio.duration) }}
              </p>
            </div>
            <div class="transport">
              <div class="previous" @click="previous()">
                <i class="fa-solid fa-backward-step"></i>
              </div>
              <div class="play" @click="togglePlay()">
                <div v-show="audio.paused">
                  <i class="fa-solid fa-play"></i>
                </div>
                <div v-show="!audio.paused">
                  <i class="fa-solid fa-pause"></i>
                </div>
              </div>
              <div class="next" @click="next()">
                <i class="fa-solid fa-forward-step"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CenterDiv>
  </PageTemplate>
</template>

<style scoped>
  h1,
  p {
    padding: 0;
    margin: 0;
  }
  h1 {
    font-size: x-large;
  }
  .data-container {
    margin-top: var(--lengths-md-2);
    margin-bottom: var(--lengths-md-2);
  }

  .transport,
  .seekbar {
    display: flex;
    justify-content: space-around;
  }

  .transport {
    font-size: 2rem;
  }
  .center {
    display: flex;
    justify-content: center;
  }
  .player-container {
    margin: var(--lengths-md-2);
    filter: var(--common-shadow);
    transform-style: preserve-3d;
    padding: var(--lengths-md-2);
    border-radius: var(--lengths-md-2);
    background-color: var(--monochrome-1);
  }
  .visualiser-container {
    color: white;
    background: var(--custom-gradient);
    border-radius: var(--lengths-md-2);
    width: 200px;
    height: 100px;
    padding: var(--lengths-md-2);
  }
</style>
