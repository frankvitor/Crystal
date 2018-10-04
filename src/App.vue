<template>
  <v-app>
    <app-menu v-model="menuAberto"></app-menu>

    <v-toolbar color="primary" dark app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="menuAberto = !menuAberto"></v-toolbar-side-icon>
      <v-toolbar-title v-text="titlex"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view />
    </v-content>

    <v-footer app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
import AppMenu from "./components/AppMenu";

export default {
  name: "App",
  data() {
    return {
      clipped: false,
      menuAberto: false,
      title: "Receitas",
    };
  },
  computed:{
    titlex(){
      return this.$route.meta.title || this.title
    }
  },
  components: {
    AppMenu
  }
};
</script>

