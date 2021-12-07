<template>
  <v-app>
  <v-app-bar app><Nav /></v-app-bar>
  <v-divider></v-divider>
  <v-main class="auth-wrapper">
    <v-container class="auth-inner">
      <router-view />
    </v-container>
  </v-main>
  <v-spacer/>
  <v-content absolute>
    <Footer />
  </v-content>
</v-app>
</template>

<script>

  import Nav from './components/Nav.vue'
  import Footer from './components/Footer.vue'


  export default {
    name: 'App',
    components: {
      Nav,
      Footer
    }
    
  }
</script>

<style>
    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

    .auth-footer, #app, #root {
      width: 100%;
      height: 100%;
    }

    #app {
      box-sizing: border-box;
      background: #1C8EF9 !important;
      min-height: 100vh;
      display: flex;
      font-weight: 400;
      font-family: 'Fira Sans', sans-serif;
    }

    .auth-wrapper, .auth-footer {
      margin-top: 40px;
      display: flex;
      justify-content: center;
      flex-direction: column;
    }

    .auth-inner {
      width: auto;
      height: auto;
      margin: auto;
      background: #FFFFFF;
      box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
      padding: 40px 55px 45px 55px;
      border-radius: 15px;
      transition: all .3s;
    }

    .auth-footer {
      width: 100%;
      height: auto;
    }

    .auth-innerfooter {
      width: 100%;
      height: auto;
      margin: auto;
      background: darkslategray;
      box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
      padding: 40px 55px ;
      transition: all .3s;
    }

  

</style>
