<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img contain height="200" src="@/assets/logoMO.svg" class="logo" />

      <!-- <div v-if="error">Oops! Error encountered: {{ error.message }}</div>
        <div v-else-if="usuariosData">
          <div v-for="({ id, Username, Nombre,Apellido,Email,password,Playlists }, i) in usuariosData" :key="id">
            <h2>
              {{ ++i}}
              {{ Username }}
              {{ Nombre }}
              {{ Apellido }}
              {{ Email }}
              {{ password }}
              {{ Playlists }}
            </h2>
          </div>
        </div> -->

      <h1>usuariosData</h1>


      <h1 class="text-h2 font-weight-bold mt-5">Music-On</h1>


      <h5>Mensajes al ritmo de tu música</h5>

      <div class="py-10" />

      <v-row class="d-flex align-center justify-center">

        <v-col cols="5">

          <v-form @submit.prevent>
            <v-text-field v-model="email" :rules="rules" label="Correo"></v-text-field>
            <v-text-field v-model="password" :rules="rulesPass" label="Contraseña"
              :type="show1 ? 'text' : 'password'"></v-text-field>

            <v-btn @submit.prevent type="submit" to="/MainPage" block class="mt-2 "
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
</style>


