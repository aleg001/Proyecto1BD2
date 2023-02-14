<template>
  <AppBar />
  <h1 class=" mt-15 text-h2 font-weight-bold text-center titleText">Estadísticas</h1>
  
  <v-container>
    <h2 class=" mt-15 text-h4 font-weight-bold text-center titleText"> TOP 10 ARTISTAS POPULARES</h2>
    <h3 v-if="artists_list">
      <v-col class="ml-15">
        <v-row class="align-center justify-content-center ">
          <v-card v-for="artist in JSON.parse(artists_list)" :key="artist._id" variant="tonal" height="100" width="300"
            class="bg-primary mr-5 mt-5 ml-5 ">
            <p class="text-center mt-10 justify-content-center">{{ artist._id }}</p>
          </v-card>
        </v-row>
      </v-col>
    </h3>
  </v-container>

  <v-container>
    <h2 class=" mt-15 text-h4 font-weight-bold text-center titleText"> TOP 10 CANCIONES BAILABLES</h2>
    <h3 v-if="dance_songs">
      <v-col class="ml-15">
        <v-row class="align-center justify-content-center ">
          <v-card v-for="song in JSON.parse(dance_songs)" :key="song.title" variant="tonal" height="100" width="300"
            class="bg-primary mr-5 mt-5 ml-5 ">
            <p class="text-center mt-10 justify-content-center">{{ song.title }}</p>
          </v-card>
        </v-row>
      </v-col>
    </h3>
  </v-container>

</template>


<script>
import AppBar from '@/components/AppBar.vue';
import axios from 'axios'

export default {
  data () {

    return {
      artists_list: null,
      dance_songs: null
    }
  },
  methods: {
    async findArtists() {
      const res = await axios.get('http://localhost:8000/api/musicstatistic1')
      this.artists_list = JSON.stringify(res.data, null, 2)
    },
    async findDanceSongs() {
      const res = await axios.get('http://localhost:8000/api/musicstatistic2')
      this.dance_songs = JSON.stringify(res.data, null, 2)
    }
  },
  beforeMount() {
    this.findArtists(),
    this.findDanceSongs()
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