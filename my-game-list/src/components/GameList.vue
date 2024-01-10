<template>
  <div class="bg-gray-100">
    <div>
      <button
        @click="() => pasaPage('prev')"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Previous
      </button>

      <button
        @click="() => pasaPage('next')"
        class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
      >
        Next
      </button>
      <Filter
        :games="games"
        @updateTextofiltrado="updateTextofiltrado"
      ></Filter>

      <div class="max-w-md mx-auto mt-4">
        <label for="genre" class="block text-sm font-medium text-gray-700"
          >Selecciona un género:</label
        >
        <select
          @change="ChanegGenre"
          id="genre"
          name="genre"
          v-model="selectedGenre"
          class="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:border-blue-500 focus:ring focus:ring-blue-200"
        >
          <option value="" disabled>Elige un género</option>
          <option v-for="genre in genres" :key="genre.id" :value="genre.id">
            {{ genre.name }}
          </option>
        </select>
      </div>
    </div>

    <div>
      <div v-if="loading">
        <ul
          class="max-w-md space-y-2 text-gray-500 list-inside dark:text-gray-400"
        >
          <li class="flex items-center">
            <svg
              class="w-14 h-14 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            Identificando usuario
          </li>
          <li class="flex items-center">
            <svg
              class="w-14 h-14 me-2 text-green-500 dark:text-green-400 flex-shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"
              />
            </svg>
            Actualizando base de datos
          </li>
          <li class="flex items-center">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-14 h-14 me-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
            Cargando Videojuegos....
          </li>
        </ul>
      </div>

      <div v-else>
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <div
              class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0"
            >
              <div v-for="game in games" :key="game.id" class="group relative">
                <RouterLink :to="`/OneGame/${game.id}`">
                  <div
                    class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-66"
                  >
                    <img
                      v-lazy="game.background_image"
                      alt=" "
                      class="h-full w-full object-cover object-center"
                    />
                  </div>
                  <h3 class="mt-6 text-sm text-gray-500">
                    <span class="absolute inset-0"></span>
                    {{ game.name }}
                  </h3></RouterLink
                >

                <p class="text-base font-semibold text-gray-900">
                  Metacritic: {{ game.metacritic }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { getAllGames } from "../services/Game";
import { getGamesByGenres } from "../services/Game";
import Filter from "./Filter.vue";
import VueLazyLoad from "vue-lazyload"

export default {
  components: { Filter },
  setup() {
    const games = ref([]);
    const page = ref(1); // Usa ref para declarar la variable reactiva page
    const prev = ref(false);
    const next = ref(false);
    const datafiltergame = ref([]);
    const selectedGenre = ref("");
    const loading = ref(true);

    const genres = [
      { id: 1, name: "Racing" },
      { id: 3, name: "Aventura" },
      { id: 4, name: "Acción" },
      { id: 5, name: "RPG" },
      { id: 6, name: "Fighting" },
      { id: 7, name: "Puzzle" },
    ];

   



    const pasaPage = (direction) => {
      if (direction === "prev" && page.value > 1) {
        page.value--;
      } else if (direction === "next") {
        page.value++;
      }
      console.log(selectedGenre);
      if (selectedGenre.value === "") {
        console.log("hola");
        dataAllGames();
      } else {
        
        dataGenresGames();
      }
      // Llama a tu función existente para obtener datos con la nueva página
    };

    const dataAllGames = async () => {
      try {
        loading.value = true;
        const response = await getAllGames(page.value);
        games.value = response.results;
        console.log(games.value);
      } catch (error) {
        console.error(error);
      } finally {
        loading.value = false;
      }
    };

    const dataGenresGames = async () => {
      try {
        loading.value = true;
        const response = await getGamesByGenres(
          page.value,
          selectedGenre.value
        );
        games.value = response.results;
      } catch (error) {
        console.error(error);
      } finally {
        await new Promise(resolve => setTimeout(resolve, 2000));
        loading.value = false;
      }
    };

    const updateTextofiltrado = (gamesfilter) => {
      datafiltergame.value = gamesfilter;
    };

    const ChanegGenre = () => {
      page.value = 1
      dataGenresGames();
    };

    onMounted(async () => {
      await dataAllGames();
    });

    return {
      genres,
      games,
      page,
      prev,
      loading,
      next,
      pasaPage,
      dataAllGames,
      dataGenresGames,
      updateTextofiltrado,
      ChanegGenre,
      selectedGenre,
      datafiltergame,
    };
  },
};
</script>

<style lang="scss" scoped></style>
