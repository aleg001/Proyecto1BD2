<template >
  <v-container class="fill-height ">
    <v-responsive class="d-flex align-center text-center fill-height">



      <h1 class="text-h2 font-weight-bold ">Registro de cuentas</h1>


      <h5 class="mt-3">Ingresa tu información para ser parte de la familia Music-On</h5>

      <div class="py-10" />

      <v-row class="d-flex align-center justify-center">

        <v-col cols="5">

          <v-form @submit.prevent = "createUsuario">
            <v-text-field v-model="email" :rules="rules" label="Correo"></v-text-field>

            <v-text-field v-model="name" :rules="rules" label="Nombre"></v-text-field>

            <v-text-field v-model="lastName" :rules="rules" label="Apellido"></v-text-field>

            <v-text-field v-model="password" :rules="rulesPass" label="Contraseña"
              :type="show1 ? 'text' : 'password'"></v-text-field>

            <v-btn type="submit" block class="mt-2 " style="background-color: #709775; color: white">Crear
              cuenta</v-btn>

          </v-form>
        </v-col></v-row>
    </v-responsive>
  </v-container>
</template>
  
<script>
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
    async createUsuario() {
      try {
        const usuario = {
          username: this.name + ' ' + this.lastName,
          nombre: this.name,
          apellido: this.lastName,
          email: this.email,
          password: this.password,
          playlists: {}
        }
        const res = await axios.post('http://localhost:8000/api/usuarios', usuario)
        console.log(res.data)
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

  
  
