<script setup>
import { ref, onMounted } from "vue";
import SocialFull from "./SocialFull.vue";
import SocialFullFallback from "./SocialFullFallback.vue";

const classArray = ["blue", "red", "yellow"];

let counter = 0;

const CountClass = () => {
  let mClass = counter;
  counter >= 2 ? (counter = 0) : counter++;
  return classArray[mClass];
};

const socials = ref([]);

const apiCall = async () => {
  const res = await fetch(
    "https://content.vertigodigital.se/wp-json/wp/v2/social-media"
  );
  const json = await res.json();
  const cleanArray = json.map((item) => {
    let object = { icon: "", link: "", name: "" };
    //might have to do the htmlclean thing at some later point but fine for now
    object.name = item.title.rendered;
    object.link = item.acf.contact_link;
    object.icon = item.acf.contact_icon;
    return object;
  });
  socials.value = cleanArray.reverse();
};

await apiCall();
</script>

<template>
  
    <SocialFull
      v-for="item in socials"
      :fontawesomeicon="item.icon"
      :link="item.link"
      :name="item.name"
      :labelclass="CountClass()"
    >
    </SocialFull>
  
</template>
