<template>

  <AppBar />

  <v-col col="3">
    <v-row>
      <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
        width="640" height="480"
        src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e03a43-4743-41c8-846d-8fc757daede5&maxDataAge=2592000&theme=light&autoRefresh=true"></iframe>
    </v-row> <v-row>
      <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
        width="640" height="480"
        src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e03fef-3254-4311-846d-d0799ece8a3b&maxDataAge=-1&theme=light&autoRefresh=false"></iframe>
    </v-row><v-row>
      <iframe style="background: #FFFFFF;border: none;border-radius: 2px;box-shadow: 0 2px 10px 0 rgba(70, 76, 79, .2);"
        width="640" height="480"
        src="https://charts.mongodb.com/charts-project-0-ypets/embed/charts?id=63e0413c-0679-44e7-8632-72f481023eaa&maxDataAge=-1&theme=light&autoRefresh=false"></iframe>
    </v-row>
  </v-col>
</template>


<script>
import AppBar from '@/components/AppBar.vue';

export default {
  components: {
    AppBar,
  },
};
</script>