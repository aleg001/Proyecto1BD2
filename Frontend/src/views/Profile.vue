<template >
    <AppBar />



    <v-responsive class=" fill-height">


        <h1 class=" mt-15 text-h2 font-weight-bold text-center titleText">Actualizar mi perfil</h1>




        <div class="py-10" />

        <v-row class="d-flex align-center justify-center">

            <v-col cols="5">

                <v-form @submit.prevent="updateUsuario">
                    <v-text-field v-model="email" label="Correo"></v-text-field>

                    <v-text-field v-model="name" label="Nombre"></v-text-field>

                    <v-text-field v-model="lastName" label="Apellido"></v-text-field>

                    <v-text-field v-model="password" :rules="rulesPass" label="Contraseña"
                        :type="show1 ? 'text' : 'password'"></v-text-field>

                    <v-btn type="submit" block class="mt-2 " style="background-color: #709775; color: white">Actualizar
                        datos</v-btn>

                </v-form>
            </v-col></v-row>
    </v-responsive>

</template>
  
<script>

import AppBar from '@/components/AppBar.vue';
import axios from 'axios'


export default {
    data: () => ({
        email: '',
        name: '',
        lastName: '',
        password: '',
        rules: [
            value => {
                if (value) return true
                return 'Debes ingresar tu información'
            },

        ],
        rulesPass: [
            value => {

                if (value.length < 8) return 'La contraseña debe tener al menos 8 caracteres'
            },

        ],
    }),
    methods: {
        async updateUsuario() {
            try {
                const usuario = {
                    username: this.name + ' ' + this.lastName,
                    nombre: this.name,
                    apellido: this.lastName,
                    email: this.email,
                    password: this.password,
                }
                const res = await axios.put('http://localhost:8000/api/usuarios', usuario)
                console.log(res.data)
            } catch (err) {
                console.error(err)
            }
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