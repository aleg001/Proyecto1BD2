<template>
  <v-container class="fill-height ">
    <v-responsive class="d-flex align-center text-center fill-height bg">
      <v-img contain height="200" src="@/assets/logoMO.svg" class="logo" />

      <h1 class="text-h2 font-weight-bold mt-5 logoText">Music-On</h1>


      <h5>Mensajes al ritmo de tu música</h5>

      <div class="py-10" />

      <v-row class="d-flex align-center justify-center">

        <v-col cols="5">

          <v-form @submit.prevent>
            <v-text-field v-model="email" :rules="rules" label="Correo"></v-text-field>
            <v-text-field v-model="password" :rules="rulesPass" label="Contraseña"
              :type="show1 ? 'text' : 'password'"></v-text-field>

            <v-btn @submit.prevent type="submit" @click="login" block class="mt-2 "
              style="background-color: #709775; color: white">Ingresar</v-btn>
            <v-btn to="/createAccount" block class="mt-2" style="background-color: #644536; color: white;">Crear
              cuenta</v-btn>
          </v-form>
        </v-col></v-row>
    </v-responsive>
  </v-container>
</template>

<script>
import { onMounted } from "vue";
import useUsuarios from "../composables/usuariosApi";
import userId from '../userId.js'

export default {
  setup() {
    const { usuariosData, error, getAllUsuarios } = useUsuarios();
    onMounted(getAllUsuarios);

    return {
      usuariosData,
      error,
    };
  },

  data: () => ({
    email: '',
    password: '',
    rules: [
      value => {
        if (value) return true
        return 'Debes ingresar tu correo'
      },

    ],
    rulesPass: [
      value => {

        if (value.length < 8) return 'La contraseña debe tener al menos 8 caracteres'
      },

    ],
  }),
  methods: {
    async login() {
      let emailMatch = false
      let passwordMatch = false
      // Verificar si el correo y la contraseña corresponden a un usuario existente
      this.usuariosData.forEach(user => {
        if (user.email === this.email) {
          emailMatch = true
          if (user.password === this.password) {
            passwordMatch = true
            userId.userId = user._id
          }

        }
      })

      // Si ambos son true ingresar
      if (emailMatch && passwordMatch) {

        this.$router.push("/MainPage");
      } else {
        // Mostrar un error
        this.error = { message: "Correo o contraseña incorrectos" };
        alert("Correo o contraseña incorrectos")
      }
    },
  },
}
</script>

<style>
.logo {
  animation: rotation 30s infinite linear;
}

.logo:hover {
  animation-play-state: paused;
}

@keyframes rotation {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}



.logoText {
  font-family: 'Aboreto', cursive !important;
}

.bg {

  backdrop-filter: blur(5px);
  background-color: rgba(255, 255, 255, 0.4);
  border-radius: 38px;
  box-shadow: -35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset 8px -8px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);

}
</style>


