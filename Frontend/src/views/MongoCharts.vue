<template>
  <AppBar />
  <h1 class=" mt-15 text-h2 font-weight-bold text-center titleText">Estadísticas</h1>

  <v-container fluid class="mt-2">
    <v-col cols="15">
      <v-row justify="center" align="center" class="mb-10">

        <iframe
          style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
          width="640" height="480"
          src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e03a43-4743-41c8-846d-8fc757daede5&maxDataAge=2592000&theme=light&autoRefresh=true"></iframe>
      </v-row>


      <v-row justify="center" align="center" class="mb-10">
        <iframe
          style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
          width="640" height="480"
          src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e03fef-3254-4311-846d-d0799ece8a3b&maxDataAge=-1&theme=light&autoRefresh=false"></iframe>
      </v-row>

      <v-row justify="center" align="center" class="mb-10">
        <iframe
          style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
          width="640" height="480"
          src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e0413c-0679-44e7-8632-72f481023eaa&maxDataAge=-1&theme=light&autoRefresh=false"></iframe>
      </v-row>
    </v-col>
  </v-container>


</template>


<script>
import AppBar from '@/components/AppBar.vue';

export default {
  components: {
    AppBar,
  },
};
</script>

<style>
.titleText {
  font-family: 'Radio Canada', sans-serif !important;
}
</style>