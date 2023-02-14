<template>
    <AppBar />
    <h1 class=" mt-15 text-h2 font-weight-bold text-center titleText mb-15">Buscar canciones</h1>
    <v-container>
        <v-col>
            <v-form @submit.prevent=findSong>
                <v-row></v-row>
                <div class="text-subtitle-1 text-medium-emphasis">Nombre de canción o artista </div>
                <v-text-field v-model="name" label="Canción/Artista"></v-text-field>

                <v-btn type="submit" block class="mt-5 primary" style="background-color: #709775; color: white">Buscar
                    canción</v-btn>
            </v-form>
        </v-col>
    </v-container>

    <v-container>
    
        <h3 v-if="res"> 
          <v-col class="ml-15">
            <v-row class="align-center justify-content-center ">
  <v-card v-for="song in JSON.parse(res)" :key="song._id" variant="tonal" height="100" width="300" class="bg-primary mr-5 mt-5 ml-5 ">
    <p class="text-center mt-10 justify-content-center">{{ song.title }} - {{ song.artist }}</p>
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
    components: {
        AppBar,
    },
    data() {
      return {
          res: null
      };
    },
    methods: {
      async findSong() {
        try {
          const query = {
            $or: [
              { 'artist': { $regex: this.name, $options: 'i' } },
              { 'title': { $regex: this.name, $options: 'i' } }
            ]
          };
          const res = await axios.post('http://localhost:8000/api/music', query)
          this.res = JSON.stringify(res.data, null, 2)
        } catch (err) {
          console.error(err)
        }
      }
    }
};
</script>

<style>
.titleText {
    font-family: 'Radio Canada', sans-serif !important;
}
</style>