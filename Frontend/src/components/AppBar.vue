<template>
  <v-app-bar color="#1A154E">
    <v-app-bar-nav-icon @click="drawer = true" style="color:white"></v-app-bar-nav-icon>

    <v-toolbar-title style="color:white">Music-On</v-toolbar-title>
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary>
    <v-list nav dense>
      <v-list-item-group v-model="group" active-class="deep-purple--text text--accent-4">
        <v-list-item to="/MainPage">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Homepage</v-list-item-title>
        </v-list-item>

        <v-list-item to="/Profile">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Mi cuenta</v-list-item-title>
        </v-list-item>

        <v-list-item to="/PlaylistCreation">
          <v-list-item-icon>
            <v-icon>mdi-playlist-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Crear Playlist</v-list-item-title>
        </v-list-item>
        <v-list-item to="/AddSongs">
          <v-list-item-icon>
            <v-icon>mdi-music</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Agregar canciones</v-list-item-title>
        </v-list-item>
        <v-list-item to="/">
          <v-list-item-icon>
            <v-icon>mdi-exit-to-app</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Salir</v-list-item-title>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>

</template>


<script>
export default {
  data: () => ({
    drawer: false,
    group: null,
  }),
}
</script>