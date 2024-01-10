<template>
  <input type="text" v-model="texto" />
</template>

<script>
import { ref, onMounted, watch, defineProps, toRefs, watchEffect } from "vue";

export default {
  props: {
    games: {
      type: Array,
      required: true,
    },
  },

  setup(props) {
    const { games } = toRefs(props);
    const texto = ref("");
    const gamesfilter = ref([]);

    const filtering = () => {
      gamesfilter.value = games.value.filter((item) =>
        item.name.toLowerCase().includes(texto.value.toLowerCase())
      );
    };

    watchEffect(() => {
      filtering();
    });

    watch(texto, () => {
      filtering();
    });

    return {
      texto,
      gamesfilter,
    };
  },
};
</script>

<style lang="scss" scoped></style>
