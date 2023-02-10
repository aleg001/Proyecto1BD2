<template>
    <AppBar />


    <h1 class="text-center mt-15"> Agregar canciones</h1>
    <v-container>
        <v-col>



            <v-form>
                <v-row></v-row>

                <div class="text-subtitle-1 text-medium-emphasis">Tonalidad</div>
                <v-select :items="items" placeholder="0 = C, 1 = C#, etc..." clearable></v-select>

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