<template>
  <AppBar />
  <h1 class=" mt-15 text-h2 font-weight-bold text-center titleText">Estadísticas</h1>

  <v-container fluid class="mt-2">
    <v-col cols="15">
      <v-row justify="center" align="center" class="mb-10">
        <iframe
          style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
          width="640" height="480"
          src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e9cdf8-1dbb-44e7-87b3-9cdd99e56d54&maxDataAge=-1&theme=light&autoRefresh=false"></iframe>
      </v-row>


      <v-row justify="center" align="center" class="mb-10">
        <iframe
          style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
          width="640" height="480"
          src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e9cd98-7e11-4340-8491-487cfdbf4262&maxDataAge=-1&theme=light&autoRefresh=false"></iframe>
      </v-row>

      <v-row justify="center" align="center" class="mb-10">
        <iframe
          style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
          width="640" height="480"
          src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e9cd13-91d7-4dcc-86f2-4662156cf704&maxDataAge=3600&theme=light&autoRefresh=true"></iframe>
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