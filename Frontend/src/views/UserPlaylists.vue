<template>
    <AppBar />

    <v-responsive class=" fill-height ">


        <h1 class=" mt-15 text-h2 font-weight-bold text-center titleText">Mis playlists</h1>




        <div class="py-10 " />

        <v-row class="d-flex align-center justify-center">
            <v-row class="d-flex align-center justify-center">
                <v-col v-for="(playlist, index) in playlists" :key="index" cols="12" sm="6" md="4" lg="3">
                    <v-card class="playlist-card bg-success">
                        <v-card-title class="text-uppercase">{{ playlist.name }}</v-card-title>
                        <v-card-subtitle>Autor: {{ playlist.author }}</v-card-subtitle>
                        <v-card-text>Descripción: {{ playlist.description }}</v-card-text>

                        <v-divider class="my-3"></v-divider>

                        <v-card-subtitle>Canciones:</v-card-subtitle>
                        <v-data-table :headers="headers" :items="playlist.songs" hide-default-footer class="elevation-0">
                            <template v-slot:item="props">
                                <tr>
                                    <td class="text-left">{{ props.item.title }}</td>
                                    <td class="text-left">{{ props.item.artist }}</td>

                                </tr>
                            </template>
                        </v-data-table>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
</v-responsive>
</template>


<script>
import AppBar from '@/components/AppBar.vue';
import axios from 'axios'
import userId from '@/userId';

export default {
    components: {
        AppBar,
    },
    data () {
        
        return {
          autoUpdate: true,
          playlist: [],
          
        }
    },
    methods: {
        
        async findPlaylists() {
            console.log(userId)
            const query = {
                $match: {
                    'user_id': userId
                }
            }
            const res = await axios.get('http://localhost:8000/api/userplaylists', query)
            const new_json = JSON.stringify(res.data, null, 2)
            this.playlist = JSON.parse(new_json)
            console.log(this.playlist)
        },
        
    },
    beforeMount(){
        this.findPlaylists()
    },

};
</script>

<style scoped>
.playlist-card {
    height: 300px;
    margin-bottom: 20px;
    background-color: #f5f5f5;
    color: #444444;
    text-align: center;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.playlist-card:hover {
    transform: translateY(-10px);
    box-shadow: 0px 5px 10px #aaaaaa;
}

.playlist-card>.v-card__title {
    font-size: 1.2rem;
    font-weight: bold;
    margin-top: 10px;
}

.playlist-card>.v-card__subtitle {
    font-size: 1rem;
    margin-top: 5px;
}

.playlist-card>.v-card__text {
    font-size: 0.9rem;
    margin-top: 15px;
}
</style>