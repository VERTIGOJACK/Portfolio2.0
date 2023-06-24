<script setup>
import { ref, onMounted } from "vue";

const loaded = ref(false);

//declare ref for timetext
const timeText = ref("");
const timeAmPm = ref("");

const updateClock = () => {
  //get the current date
  let currentTime = new Date();

  //extract hrs minutes seconds from date and set to
  let hours = currentTime.getHours();
  let minutes = currentTime.getMinutes();
  let seconds = currentTime.getSeconds();

  let amPm = "";

  // Convert to 12-hour format
  if (hours >= 22) {
    amPm = "Night";
  } else if (hours >= 18) {
    amPm = "Evening";
  } else if (hours >= 13) {
    amPm = "Afternoon";
  } else if (hours >= 12) {
    amPm = "Lunch";
  } else if (hours >= 5) {
    amPm = "Morning";
  } else if (hours >= 0) {
    amPm = "Night";
  }

  // Add leading zeros if necessary
  hours = formatTime(hours);
  minutes = formatTime(minutes);
  seconds = formatTime(seconds);

  // set formatted time to ref
  timeText.value = hours + ":" + minutes + ":" + seconds;
  timeAmPm.value = amPm;

  if (loaded.value != true) {
    loaded.value = true;
  }
};

const formatTime = (time) => {
  return time < 10 ? "0" + time : time;
};

onMounted(() => {
  // Update the clock every second
  setInterval(updateClock, 1000);
});
</script>

<template>
  <div class="clock" :class="loaded ? 'show' : 'hide'">
    <h1>{{ timeText }}</h1>
    <h2>{{ timeAmPm }}</h2>
  </div>
</template>

<style scoped>
div {
  width: 100%;
  padding: var(--lengths-md-2);
  color: var(--monochrome-1);
}
h1 {
  width: fit-content;
  margin: 0;
  font-family: var(--font5);
  font-style: italic;
  border-bottom: var(--lengths-sm-1) var(--monochrome-1) solid;
  font-size: 1em;
}

h2 {
  width: fit-content;
  text-transform: uppercase;
  font-family: var(--font5);
  font-weight: 100;
  font-size: 1em;
  margin: 0;
  padding: 0;
  line-height: 1.5;
}

.clock {
  transition: all 2s;
}
.hide {
  opacity: 0;
}

.show {
  opacity: 1;
}
</style>
