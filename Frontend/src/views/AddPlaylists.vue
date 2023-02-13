<template>
    <AppBar />


    <h1 class="text-center mt-15 text-h2 font-weight-bold titleText"> Nueva playlist</h1>
    <v-container>
        <v-col>



            <v-form @submit.prevent="createUsuario">
                <v-row></v-row>

                <div class="text-subtitle-1 text-medium-emphasis">Título</div>
                <v-text-field label="Agrega un título" :rules="rules" hide-details="auto"></v-text-field>

                <div class=" mt-5 text-subtitle-1 text-medium-emphasis">Descripción</div>
                <v-text-field label="Agrega una descripción" :rules="rules" hide-details="auto"></v-text-field>

                <div class=" mt-5 text-subtitle-1 text-medium-emphasis">Canciones</div>

                <v-autocomplete
                    v-model="playlist_songs"
                    :disabled="isUpdating"
                    :items="songs_list"
                    chips
                    closable-chips
                    color="blue-grey-lighten-2"
                    item-title="songs"
                    item-value="songs"
                    label="Agrega las canciones"
                    multiple
                >
                    <template v-slot:chip="{ props, item }">
                        <v-chip
                        v-bind="props"
                        :prepend-avatar="item.raw.avatar"
                        :text="item.raw"
                        ></v-chip>
                    </template>

                    <template v-slot:item="{ props, item }">
                        <v-list-item
                        v-bind="props"
                        :prepend-avatar="item?.raw?.avatar"
                        :title="item?.raw"
                        :subtitle="item?.raw?.group"
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

export default {
    data () {

      return {
        autoUpdate: true,
        playlist_songs: [],
        isUpdating: false,
        songs_list: ["1", "2"],
        timeout: null,
      }
    },
    methods: {
        async findSongs() {
            
        }
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