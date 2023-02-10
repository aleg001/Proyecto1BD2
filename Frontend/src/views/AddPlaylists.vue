<template>
    <AppBar />


    <h1 class="text-center mt-15"> Nueva playlist</h1>
    <v-container>
        <v-col>



            <v-form @submit.prevent="createUsuario">
                <v-row></v-row>

                <div class="text-subtitle-1 text-medium-emphasis">Título</div>
                <v-text-field label="Agrega un título" :rules="rules" hide-details="auto"></v-text-field>

                <div class=" mt-5 text-subtitle-1 text-medium-emphasis">Descripción</div>
                <v-text-field label="Agrega una descripción" :rules="rules" hide-details="auto"></v-text-field>

                <div class=" mt-5 text-subtitle-1 text-medium-emphasis">Canciones</div>
                <v-select label="Agrega las canciones" :rules="rules" hide-details="auto" multiple=""></v-select>

                <v-btn type="submit" block class="mt-5 " style="background-color: #709775; color: white">Crear
                    playlist</v-btn>


            </v-form>
        </v-col>
    </v-container>
</template>


<script>

import AppBar from '@/components/AppBar.vue';

export default {
    data: () => ({
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }),
    components: {
        AppBar
    }
}
</script>