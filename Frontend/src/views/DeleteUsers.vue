<template>
    <AppBar />

    <h1 class="text-center mt-15 text-h2 font-weight-bold">Eliminar Usuarios</h1>
    <v-container>
        <v-col>
            <v-form @submit.prevent="createUsuario">
                <v-row></v-row>
                <div class="text-subtitle-1 text-medium-emphasis">Correo electrónico</div>
                <v-text-field label="Ingresa el correo del usuario a eliminar" :rules="rules"
                    hide-details="auto"></v-text-field>

                <div class=" mt-5 text-subtitle-1 text-medium-emphasis">Motivo de eliminación</div>
                <v-text-field label="Agrega una descripción" :rules="rules" hide-details="auto"></v-text-field>

                <v-btn type="submit" block class="mt-5 secondary" style="background-color: #644536; color: white">Crear
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