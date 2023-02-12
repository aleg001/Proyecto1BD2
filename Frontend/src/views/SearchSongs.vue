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

                {{ res }}

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
        const name = this.name;
        const query = {
          $or: [
            { 'artist.name': { $regex: name, $options: 'i' } },
            { 'song.title': { $regex: name, $options: 'i' } }
          ]
        };
        const res = await axios.get('http://localhost:8000/api/music', { params: { query } });
        console.log(res.data);
        return res.data;
      } catch (err) {
        console.error(err);
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