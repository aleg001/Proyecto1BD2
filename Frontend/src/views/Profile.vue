<template >
    <AppBar />



    <v-responsive class=" fill-height">


        <h1 class=" mt-15 text-h2 font-weight-bold text-center">Actualizar mi perfil</h1>




        <div class="py-10" />

        <v-row class="d-flex align-center justify-center">

            <v-col cols="5">

                <v-form @submit.prevent="createUsuario">
                    <v-text-field v-model="email" :rules="rules" label="Correo"></v-text-field>

                    <v-text-field v-model="name" :rules="rules" label="Nombre"></v-text-field>

                    <v-text-field v-model="lastName" :rules="rules" label="Apellido"></v-text-field>

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
    components: {
        AppBar
    }
}

</script>

  
  
