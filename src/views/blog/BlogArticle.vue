<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Blogpost from "./blogpost/Blogpost.vue";
import PageTemplate from "../../components/general/page/PageTemplate.vue";

const router = useRouter();
</script>

<template>
  <PageTemplate>
    <div class="pagecontainer">
      <div class="pagerestrict">
        <Blogpost :postid="router.currentRoute.value.params.id"></Blogpost>
      </div>
    </div>
  </PageTemplate>
</template>
