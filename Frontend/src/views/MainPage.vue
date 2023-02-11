<template>
  <AppBar />
  <h1 class="text-center mt-15 text-h2 font-weight-bold titleText"> Homepage</h1>
  <v-container class="mt-10 boxes">
    <h4 class="mx-auto ml-10 mb-3">Descubre todas las posibilidades de Music-On</h4>
    <v-row>
      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto button " to="/Profile" @mouseover="browseHover = true" @mouseleave="browseHover = false"
          color="#709775" style="color: white;" rounded="xl">
          <v-card-title class="font-weight-bold">Mi perfil <v-icon>mdi-account</v-icon></v-card-title>
          <v-card-text>Edita la información de tu perfil</v-card-text>

        </v-card>
      </v-col>

      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto button" to="/AddPlaylists" @mouseover="searchHover = true"
          @mouseleave="searchHover = false" color="#709775" style="color: white;" rounded="xl">
          <v-card-title class="font-weight-bold">Crear Playlist <v-icon>mdi-playlist-plus</v-icon></v-card-title>
          <v-card-text>Crea una playlist con tus canciones favoritas</v-card-text>

        </v-card>
      </v-col>

      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto button" to="/MongoCharts" @mouseover="libraryHover = true"
          @mouseleave="libraryHover = false" color="#709775" style="color: white;" rounded="xl">
          <v-card-title class="font-weight-bold">Estadísticas <v-icon>mdi-chart-areaspline</v-icon></v-card-title>
          <v-card-text>Accede a las estadísticas de la plataforma. Powered by Mongo Charts!</v-card-text>

        </v-card>
      </v-col>


      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto button" to="/SearchSongs" @mouseover="libraryHover = true"
          @mouseleave="libraryHover = false" color="#709775" style="color: white;" rounded="xl">
          <v-card-title class="font-weight-bold">Busca canciones <v-icon>mdi-music</v-icon></v-card-title>
          <v-card-text>Busca canciones en la plataforma</v-card-text>

        </v-card>
      </v-col>


      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto button" @mouseover="libraryHover = true" @mouseleave="libraryHover = false"
          @click="showModal = true" color="grey" rounded="xl">
          <v-card-title class="font-weight-bold">Eliminar usuario <v-icon>mdi-delete-alert</v-icon></v-card-title>
          <v-card-text>Función para usuarios administrador</v-card-text>

        </v-card>
      </v-col>


      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto button" to="/" @mouseover="libraryHover = true" @mouseleave="libraryHover = false"
          color="black" rounded="xl">
          <v-card-title class="font-weight-bold">Salir <v-icon>mdi-exit-to-app</v-icon></v-card-title>
          <v-card-text>Salir de Music-On</v-card-text>

        </v-card>
      </v-col>
    </v-row>


    <v-dialog v-model="showModal" class="center-dialog">
      <v-card width="100%" height="100%" @keyup.enter="checkPassword">
        <v-card-title>Ingresa la contraseña</v-card-title>
        <v-card-text>
          <v-text-field v-model="password" type="password"></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" @click="checkPassword">Ingresar</v-btn>
          <v-btn color="error" @click="showModal = false">Cancelar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </v-container>
</template>
<script>
import AppBar from '@/components/AppBar.vue';

export default {
  data() {
    return {
      browseHover: false,
      searchHover: false,
      libraryHover: false,
      showModal: false,
      password: ''
    };
  },
  methods: {
    checkPassword() {
      if (this.password === 'musicOn') {
        this.$router.push('/DeleteUsers');
        this.modal = false;
      } else {
        this.password = '';
        alert('Incorrecto');
      }
    },
  },

  components: {
    AppBar,
  },
};
</script>
<style>
.v-card {
  height: 120px;
  width: 300px;
  border-radius: 10px;
  margin: 10px;
}

.boxes {

  backdrop-filter: blur(5px);

  background-color: rgba(255, 255, 255, 1);

  border-radius: 26px;

  box-shadow: 35px 35px 68px 0px rgba(145, 192, 255, 0.5), inset -8px -8px 16px 0px rgba(145, 192, 255, 0.6), inset 0px 11px 28px 0px rgb(255, 255, 255);
}


.titleText {
  font-family: 'Radio Canada', sans-serif !important;
}

.button {
  background-color: #709775;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 25px;
  transition: transform 0.2s ease-in-out;
}

.button:hover {
  -webkit-animation: wobble-hor-bottom 0.5s both;
  animation: wobble-hor-bottom 0.5s both;
  transform-origin: center;
  /* centers the animation around the button */
}

@-webkit-keyframes wobble-hor-bottom {

  0%,
  100% {
    transform: translateX(0%);
  }

  15% {
    transform: translateX(-3px) rotate(-3deg);
  }

  30% {
    transform: translateX(2px) rotate(2deg);
  }

  45% {
    transform: translateX(-2px) rotate(-1deg);
  }

  60% {
    transform: translateX(1px) rotate(0.5deg);
  }

  75% {
    transform: translateX(-1px) rotate(-0.5deg);
  }
}

@keyframes wobble-hor-bottom {

  0%,
  100% {
    transform: translateX(0%);
  }

  15% {
    transform: translateX(-3px) rotate(-3deg);
  }

  30% {
    transform: translateX(2px) rotate(2deg);
  }

  45% {
    transform: translateX(-2px) rotate(-1deg);
  }

  60% {
    transform: translateX(1px) rotate(0.5deg);
  }

  75% {
    transform: translateX(-1px) rotate(-0.5deg);
  }
}
</style>