<template>
    <AppBar />
    <h1 class=" mt-15 text-h2 font-weight-bold text-center titleText mb-15">Buscar canciones</h1>
    <v-container>
        <v-col>
            <v-form @submit.prevent="deleteUser">
                <v-row></v-row>
                <div class="text-subtitle-1 text-medium-emphasis">Nombre de canción o artista </div>
                <v-autocomplete v-model="name" clearable label="Canción/Artista"></v-autocomplete>
                <template></template>
                <v-btn type="submit" block class="mt-5 primary" style="background-color: #709775; color: white">Buscar
                    canción</v-btn>

            </v-form>
        </v-col>
    </v-container>

</template>


<script>
import AppBar from '@/components/AppBar.vue';
import axios from 'axios'

export default {
    components: {
        AppBar,
    },
    methods: {
    async findSong() {
      try {
        const artist_song = this.name
        const res = await axios.get('http://localhost:8000/api/music', artist_song)
        return res
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