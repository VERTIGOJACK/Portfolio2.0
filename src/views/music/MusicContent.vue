<script setup>
  import { ref, onMounted } from "vue";
  import { onBeforeRouteLeave } from "vue-router";

  import CenterDiv from "../../components/general/div/CenterDiv.vue";
  import Visualizer from "../../components/visualizer/Visualizer.vue";
  import { secondsToTimeFormat } from "../../components/helper/secondsToTimeformat.js";
  const audio = ref(new Audio());
  audio.value.crossOrigin = "http://localhost:5173";
  const currentTime = ref(audio.value.currentTime);
  const rotateVector = ref({ x: 0, y: 0, test: "" });
  const playList = ref([
    {
      filePath: "/path",
      songName: "B2B",
      artistName: "VERTIGOJACK",
      songYear: "2022",
    },
  ]);
  const counter = ref(0);

  const getPlaylist = async () => {
    const res = await fetch(
      "https://content.vertigodigital.se/wp-json/wp/v2/songs"
    );
    const json = await res.json();
    const cleanArray = await json.map(async (item) => {
      const result = {
        filePath: "",
        songName: "",
        artistName: "",
        songYear: "",
      };
      const fileRes = await fetch(
        "https://content.vertigodigital.se/wp-json/wp/v2/media/" +
          item.acf.song_file
      );
      const fileJson = await fileRes.json();

      result.filePath = fileJson.source_url;

      result.songName = item.acf.song_title;
      result.artistName = item.acf.artist_name;
      result.songYear = item.acf.year;
      return result;
    });

    playList.value = await Promise.all(cleanArray);
    console.log(playList.value);
  };

  //run data fn, set initilal value to first in list
  await getPlaylist();
  audio.value.src = playList.value[0].filePath;

  const togglePlay = () => {
    if (audio.value.paused) {
      audio.value.play();
    } else {
      audio.value.pause();
    }
  };

  const next = () => {
    counter.value + 1 < playList.value.length
      ? counter.value++
      : (counter.value = 0);
    audio.value.src = playList.value[counter.value].filePath;
    audio.value.play();
  };
  const previous = () => {
    counter.value > 0
      ? counter.value--
      : (counter.value = playList.value.length - 1);
    audio.value.src = playList.value[counter.value].filePath;
    audio.value.play();
  };

  const limitValue = (value, maxvalue, minvalue) => {
    if (value > maxvalue) {
      return maxvalue;
    } else if (value < minvalue) {
      return minvalue;
    } else {
      return value;
    }
  };

  const rotatePlayerSetup = () => {
    const playerElement = document.getElementById("player");
    const spaceElement = document.getElementById("space");
    let gyro = false;
    //first check if gyro is available
    const mouseRotate = (e) => {
      rotateVector.value.x =
        (e.pageX - spaceElement.offsetWidth / 2) /
        (spaceElement.offsetWidth / 2);
      rotateVector.value.y =
        (e.pageY - spaceElement.offsetHeight / 2) /
        (spaceElement.offsetHeight / 2);

      playerElement.style.transform = `perspective(800px) rotateY(${
        rotateVector.value.x * 20
      }deg) rotateX(${rotateVector.value.y * 20 * -1}deg)`;
    };

    const gyroRotate = (e) => {
      rotateVector.value.x = limitValue(e.gamma, 30, -30) / 60;
      rotateVector.value.y = limitValue(e.beta, 90, -40) / 130;

      playerElement.style.transform = `perspective(800px) rotateY(${
        rotateVector.value.x * 30 * -1
      }deg) rotateX(0deg)`;
    };

    spaceElement.addEventListener("mousemove", mouseRotate);

    window.addEventListener(
      "deviceorientation",
      (e) => {
        if (e.alpha || e.gamma || e.beta) {
          spaceElement.removeEventListener("mousemove", mouseRotate);
          console.log("removed");
          window.addEventListener("deviceorientation", gyroRotate);
        }
      },
      { once: true }
    );

    // // if available use gyro for rotation
    // if (gyro) {
    //   console.log("motion detected");
    //   window.addEventListener("deviceorientation", (e) => {
    //     rotateVector.value.x = limitValue(e.gamma, 30, -30) / 60;
    //     rotateVector.value.y = limitValue(e.beta, 90, -40) / 130;

    //     playerElement.style.transform = `rotateY(${
    //       rotateVector.value.x * 30 * -1
    //     }deg) rotateX(${rotateVector.value.y * 30 * -1}deg)`;
    //   });
    // } else {
    //   //if gyro not available use mousePos for rotation
    // }
  };
  onMounted(async () => {
    audio.value.addEventListener("timeupdate", () => {
      currentTime.value = audio.value.currentTime;
    });

    rotatePlayerSetup();

    onBeforeRouteLeave(() => {
      audio.value.pause();
    });
  });
</script>

<template>
  <CenterDiv id="space" bottom="true">
    <div class="outer">
      <div class="volume-container">
        <div class="volume-up">
          <i class="fa-solid fa-volume-up"></i>
        </div>

        <input
          type="range"
          name="volume"
          id="volume"
          value="20"
          :min="0"
          :max="100"
          @input="(e) => (audio.volume = e.target.value / 100)" />
        <div class="volume-down">
          <i class="fa-solid fa-volume-down"></i>
        </div>
      </div>
      <div class="center">
        <div id="player" class="player-container rainbow-border">
          <div class="player-inner">
            <div class="visualiser-container">
              <h1 class="year">
                {{ playList[counter].songYear }}
              </h1>
              <Visualizer :audioSource="audio"> </Visualizer>
            </div>
            <div class="data-container">
              <h1>{{ playList[counter].songName }}</h1>
              <p>{{ playList[counter].artistName }}</p>
            </div>
            <div class="controls-container">
              <div class="seekbar">
                <p class="current-time">
                  {{ secondsToTimeFormat(currentTime) }}
                </p>
                <input
                  type="range"
                  :min="0"
                  :max="audio.duration"
                  v-model="currentTime"
                  @input="(e) => (audio.currentTime = e.target.value)"
                  @mousedown="audio.pause()"
                  @mouseup="audio.play()" />
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
      </div>
    </div>
    <!-- <p>{{ rotateVector.x }}</p>
    <p>{{ rotateVector.y }}</p> -->
    <div class="hero-background"></div>
  </CenterDiv>
</template>

<style scoped>
  #space {
    position: relative;
    overflow: hidden;
    height: fit-content;
  }
  .hero-background {
    z-index: -1;
    width: 100%;
    height: 100%;
    left: -50%;
    top: -75%;
    transform: translate(50%, 50%) scale(2);
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
  .year {
    position: absolute;
    right: calc(0px + var(--lengths-md-3));
    filter: var(--common-shadow);
  }

  .volume-up,
  .volume-down {
    font-size: large;
    font-weight: bold;
  }
  .outer {
    padding-top: var(--lengths-md-3);
    padding-bottom: var(--lengths-md-3);
    display: flex;
    width: 100%;
  }

  .volume-container {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin: var(--lengths-md-2);
    background-color: var(--monochrome-1);
    width: var(--lengths-md-3);
    border-radius: var(--lengths-md-2);
    filter: var(--common-shadow);
    margin-top: var(--lengths-md-3);
    margin-bottom: var(--lengths-md-3);
  }

  #volume {
    rotate: -90deg;
  }

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
    width: 100%;
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
    width: 100%;
    height: 100%;
    padding: var(--lengths-md-2);
  }
</style>
