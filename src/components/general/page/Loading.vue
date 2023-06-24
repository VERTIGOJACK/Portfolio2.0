<script setup>
import randLorem from "../../helper/randLorem.js";
</script>
<template>

      <div class="container">
        <div class="content">
          <p v-for="number in 15" class="loading">
            {{ randLorem(40, 60) }}
          </p>
        </div>
      </div>

</template>

<style scoped>
.container{
  display: flex;
  justify-content: center;
}
.content {
  width: 80%;
}
</style>
