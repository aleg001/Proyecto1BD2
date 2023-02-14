<template>
  <AppBar />
  <h1 class=" mt-15 text-h2 font-weight-bold text-center titleText">Estadísticas</h1>

  <v-container fluid class="mt-2">
    <v-col cols="15">

    </v-col>
  </v-container>


</template>


<script>
import AppBar from '@/components/AppBar.vue';
import axios from 'axios'

export default {
  methods: {
    async findSongs() {
      const res = await axios.get('http://localhost:8000/api/musicstatistics')
      const new_json = JSON.stringify(res.data, null, 2)
      this.songs_list = JSON.parse(new_json)
    }
  },
  beforeMount() {
    this.findSongs()
  },
  components: {
    AppBar,
  },
};
</script>

<style>
.titleText {
  font-family: 'Radio Canada', sans-serif !important;
}
</style>