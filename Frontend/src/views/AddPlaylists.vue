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
                    v-model="friends"
                    :disabled="isUpdating"
                    :items="people"
                    chips
                    closable-chips
                    color="blue-grey-lighten-2"
                    item-title="name"
                    item-value="name"
                    label="Agrega las canciones"
                    multiple
                >
                    <template v-slot:chip="{ props, item }">
                        <v-chip
                        v-bind="props"
                        :prepend-avatar="item.raw.avatar"
                        :text="item.raw.name"
                        ></v-chip>
                    </template>

                    <template v-slot:item="{ props, item }">
                        <v-list-item
                        v-bind="props"
                        :prepend-avatar="item?.raw?.avatar"
                        :title="item?.raw?.name"
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
    data: () => ({
        items: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    }),
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