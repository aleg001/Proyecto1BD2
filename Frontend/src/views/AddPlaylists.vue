<template>
    <AppBar />


    <h1 class="text-center mt-15 text-h2 font-weight-bold titleText"> Nueva playlist</h1>
    <v-container>
        <v-col>



            <v-form @submit.prevent="createPlaylist">
                <v-row></v-row>

                <div class="text-subtitle-1 text-medium-emphasis">Título</div>
                <v-text-field v-model="title" label="Agrega un título" :rules="rules" hide-details="auto"></v-text-field>

                <div class=" mt-5 text-subtitle-1 text-medium-emphasis">Descripción</div>
                <v-text-field v-model="description" label="Agrega una descripción" :rules="rules" hide-details="auto"></v-text-field>

                <div class=" mt-5 text-subtitle-1 text-medium-emphasis">Canciones</div>

                <v-autocomplete
                    v-model="playlist_songs"
                    :items="songs_list"
                    chips
                    closable-chips
                    color="blue-grey-lighten-2"
                    label="Agrega las canciones"
                    multiple
                >
                    <template v-slot:chip="{ props, item }">
                        <v-chip
                        v-bind="props"
                        :text="item.raw.title"
                        ></v-chip>
                    </template>

                    <template v-slot:item="{ props, item }">
                        <v-list-item
                        v-bind="props"
                        :title="item?.raw?.title"
                        :subtitle="item?.raw?.artist"
                        ></v-list-item>
                    </template>

                </v-autocomplete>

                <v-btn type="submit" block class="mt-5 " style="background-color: #709775; color: white">Crear
                    playlist</v-btn>


            </v-form>
        </v-col>
    </v-container>
</template>


<script>

import AppBar from '@/components/AppBar.vue';
import axios from 'axios'

export default {
    data () {

      return {
        autoUpdate: true,
        playlist_songs: [],
        songs_list: [],
      }
    },
    methods: {
        async findSongs() {
            const res = await axios.get('http://localhost:8000/api/music')
            const new_json = JSON.stringify(res.data, null, 2)
            this.songs_list = JSON.parse(new_json)
        },
        async createPlaylist() {
            try {
                console.log(this.playlist_songs)
                const playlist = {
                    title: this.title,
                    description: this.description,
                    playlist_songs: this.playlist_songs
                }
                const res = await axios.post('http://localhost:8000/api/playlist', playlist)
                console.log(res)
            } catch (err) {
                console.error(err)
            }
        }
        
    },
    beforeMount(){
        this.findSongs()
    },
    components: {
        AppBar
    }
}
</script> 

<style>
.titleText {
    font-family: 'Radio Canada', sans-serif !important;
}
</style>