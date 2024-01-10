<template>
  <!-- Contenedor de las dos imágenes -->

  <div class="w-full">
    <!-- Primera imagen -->
    <img
      :src="dataGame.background_image_additional"
      class="object-cover w-full lg:h-[40rem] h-[11rem]"
      alt=""
    />
  </div>

  <div class="flex">
    <!-- Segunda imagen superpuesta -->
    <img
      :src="dataGame.background_image"
      alt=""
      class="absolute h-20 w-20 top-[154px] left-[165px] lg:top-[520px] lg:left-11 object-cover lg:h-[19rem] lg:w-[22rem] rounded-[40px]"
    />
    <div
      class="lg:p-0 lg:ml-0 lg:text-left p-8  text-center lg:flex lg:flex-col lg:items-end"
    >
      <div class="lg:w-3/4">
        <h1 class="text-lg lg:text-4xl font-bold text-gray-900 pt-4  ">
          {{ dataGame.name }}
        </h1>
        <div class="mb-5 text-md font-semibold  text-gray-900 mt-6 ">
          Metacritic: {{ dataGame.metacritic }}
        </div>
              <h2 class="mt-6  text-md">{{ dataGame.description_raw }}</h2>
      </div>


     
    </div>
  </div>
  <div
        v-for="(genres, index) in dataGame.publishers"
        :key="index"
        class="relative flex flex-row justify-center items-center lg:justify-start"
      >
<h2 class="text-lg text-md font-semibold  text-gray-900 mr-2 mb-2">Publishers:</h2>
     <p class="mb-2"> {{ genres.name }}</p>
        
       
      </div>
  <div
        v-for="(genres, index) in dataGame.genres"
        :key="index"
        class="relative flex justify-center lg:justify-start"
      >
        <img :src="genres.image_background" alt="" class="w-[22rem] bg-black opacity-70" />
        
        <p
          class="absolute inset-0 flex items-center pl-[10.8rem] lg:pl-[9rem] text-black font-bold"
        >
          {{ genres.name }}
        </p>
      </div >


<div class="absolute top-[70rem] right-32">
      <div v-for="(videos, index) in video" :key="index" 
      >
  <h2>{{ videos.name }}</h2>

  <div class="video-container">
    <iframe width="1160" height="615" :src="videos.data['max']" frameborder="0" allowfullscreen></iframe>
  </div>
</div>
</div>



</template>

<script setup>
import { ref, onMounted, watch, onBeforeMount } from "vue";
import { useRoute } from "vue-router";
import { getGameById } from "../services/Game";
import { getGameByTrailer } from "../services/Game";

const id = ref(null);
const dataGame = ref(null);
const video = ref(null);

const route = useRoute();

const fetchData = async () => {
  dataGame.value = await getGameById(id.value);
  console.log(dataGame.value);
};
const fetchtrailer = async () => {
  video.value = await getGameByTrailer(id.value);
  console.log(video.value);
};

const getYouTubeEmbedUrl = (youtubeId) =>{
    return `https://www.youtube.com/embed/${youtubeId}`;
  };

onBeforeMount(async () => {
  id.value = route.params.id;
  await fetchData();
  await fetchtrailer();
  
});
</script>

<style lang="scss" scoped></style>
