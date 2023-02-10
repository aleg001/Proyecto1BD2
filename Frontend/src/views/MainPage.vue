<template>
  <AppBar />
  <h1 class="text-center mt-15 text-h2 font-weight-bold"> Homepage</h1>
  <v-container class="mt-10">
    <v-row>
      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto" to="/Profile" @mouseover="browseHover = true" @mouseleave="browseHover = false"
          color="primary" rounded="xl">
          <v-card-title class="font-weight-bold">Mi perfil <v-icon>mdi-account</v-icon></v-card-title>
          <v-card-text>Edita la información de tu perfil</v-card-text>

        </v-card>
      </v-col>

      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto" to="/AddPlaylists" @mouseover="searchHover = true" @mouseleave="searchHover = false"
          color="secondary" rounded="xl">
          <v-card-title class="font-weight-bold">Crear Playlist <v-icon>mdi-playlist-plus</v-icon></v-card-title>
          <v-card-text>Crea una playlist con tus canciones favoritas</v-card-text>

        </v-card>
      </v-col>

      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto" to="/MongoCharts" @mouseover="libraryHover = true" @mouseleave="libraryHover = false"
          color="primary" rounded="xl">
          <v-card-title class="font-weight-bold">Estadísticas <v-icon>mdi-chart-areaspline</v-icon></v-card-title>
          <v-card-text>Accede a las estadísticas de la plataforma. Powered by Mongo Charts!</v-card-text>

        </v-card>
      </v-col>


      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto" to="/SearchSongs" @mouseover="libraryHover = true" @mouseleave="libraryHover = false"
          color="secondary" rounded="xl">
          <v-card-title class="font-weight-bold">Busca canciones <v-icon>mdi-music</v-icon></v-card-title>
          <v-card-text>Busca canciones en la plataforma</v-card-text>

        </v-card>
      </v-col>


      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto" @mouseover="libraryHover = true" @mouseleave="libraryHover = false"
          @click="showModal = true" color="black" rounded="xl">
          <v-card-title class="font-weight-bold">Eliminar usuario <v-icon>mdi-delete-alert</v-icon></v-card-title>
          <v-card-text>Función para usuarios administrador</v-card-text>

        </v-card>
      </v-col>


      <v-col cols="12" sm="4" class="d-flex">
        <v-card class="mx-auto" to="/" @mouseover="libraryHover = true" @mouseleave="libraryHover = false" color="red"
          rounded="xl">
          <v-card-title class="font-weight-bold">Salir <v-icon>mdi-exit-to-app</v-icon></v-card-title>
          <v-card-text>Salir de Music-On</v-card-text>

        </v-card>
      </v-col>
    </v-row>


    <v-dialog v-model="showModal" class="center-dialog">
      <v-card width="100%">
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
        this.$router.push('/deleteUser');
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
  height: 80%;
  width: 300px;
  border-radius: 10px;
  margin: 10px;
}

.center-dialog {
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>