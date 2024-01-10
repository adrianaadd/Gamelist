<script setup>
import GameListVue from "./components/GameList.vue";
import Login from "./page/Login.vue";

</script>

<template>
  <div>
  <div>
    <router-link to="/GameList">Home</router-link>

  </div>
<router-view></router-view>
  
  </div>
</template>

<style scoped></style>
