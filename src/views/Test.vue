<script setup>
  import { ref, onMounted } from "vue";
  import SocialFull from "../components/social/SocialFull.vue";
  import Clock from "../components/clock/Clock.vue"
  const socials = ref([]);

  onMounted(async () => {
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

    socials.value = cleanArray;
  });
</script>

<template>
  <SocialFull
    v-for="item in socials"
    :fontawesomeicon="item.icon"
    :link="item.link"
    :name="item.name">
  </SocialFull>
  <Clock></Clock>
</template>