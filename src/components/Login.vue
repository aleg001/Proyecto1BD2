<template>
  <v-container class="fill-height">
    <v-responsive class="d-flex align-center text-center fill-height">
      <v-img
        contain
        height="200"
        src="@/assets/logoMO.png"
        class="logo"
      />


      <h1 class="text-h2 font-weight-bold mt-5" >Music-On</h1>
  

      <h5>Mensajes al ritmo de tu música</h5>

      <div class="py-10" />

      <v-row class="d-flex align-center justify-center">
       
        <v-col cols="5"> 
        
          <v-form @submit.prevent>
            <v-text-field
              v-model="email"
              :rules="rules"
              label="Correo"
            ></v-text-field>
            <v-text-field
              v-model="password"
              :rules="rulesPass"
              label="Contraseña"
              :type="show1 ? 'text' : 'password'"
            ></v-text-field>
        
            <v-btn type="submit" block class="mt-2 " style="background-color: #709775; color: white">Ingresar</v-btn>
            <v-btn to="/createAccount" block class="mt-2" style="background-color: #644536; color: white;">Crear cuenta</v-btn>
          </v-form>
        </v-col></v-row>
    </v-responsive>
  </v-container>
</template>

<script>
 export default {
    data: () => ({
      email: '',
      password: '',
      rules: [
        value => {
          if (value) return true
          return 'Debes ingresar tu correo'},
        
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


