<template>
    <AppBar />

    <h1 class="text-center mt-15 text-h2 font-weight-bold titleText">Eliminar Usuarios</h1>
    <v-container>
        <v-col>
            <v-form @submit.prevent="deleteUser">
                <v-row></v-row>
                <div class="text-subtitle-1 text-medium-emphasis">Correo </div>
                <v-text-field v-model="email" label="Ingresa el correo del usuario a eliminar" :rules="rules"
                    hide-details="auto"></v-text-field>

                <div class=" mt-5 text-subtitle-1 text-medium-emphasis">Motivo de eliminación</div>
                <v-text-field v-model="motivo" label="Agrega una descripción" :rules="rules"
                    hide-details="auto"></v-text-field>

                <v-btn type="submit" block class="mt-5 secondary"
                    style="background-color: #644536; color: white">Eliminar usuario</v-btn>

            </v-form>
        </v-col>
    </v-container>
</template>


<script>

import AppBar from '@/components/AppBar.vue';
import axios from 'axios'

export default {

    data: () => ({
        email: '',
        motivo: '',
        rules: [
            v => !!v || 'Campo requerido'
        ]
    }),
    components: {
        AppBar
    },
    methods: {
        async deleteUser() {
            // escribir la razon del porque se elimino
            try {
                const usuarioEliminado = {
                    email: this.email,
                    motivo: this.motivo
                }
                const res = await axios.post('http://localhost:8000/api/usuarioseliminados', usuarioEliminado)
                console.log(res.data)
            } catch (err) {
                console.error(err)
            }
            // Eliminarlo de la base de datos
            try {
                const usuario = {
                    email: this.email
                }
                await axios.delete('http://localhost:8000/api/usuarios/' + usuario.id, {
                    data: usuario
                })
                // Mostrar mensaje de éxito al usuario
            } catch (error) {
                console.error(error)
                // Mostrar mensaje de error al usuario
            }
        }
    }
}
</script>


<style>
.titleText {
    font-family: 'Radio Canada', sans-serif !important;
}
</style>