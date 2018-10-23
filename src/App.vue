<template>
  <v-app>
    <app-menu v-model="menuAberto" v-if="showToolbar"></app-menu>

    <v-toolbar color="primary" dark app :clipped-left="clipped" v-if="showToolbar">
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
  </v-app>
</template>

<script>
import AppMenu from "./components/AppMenu";
import AppMenuToolbar from "./components/AppMenuToolbar";

export default {
  name: "App",
  data() {
    return {
      clipped: false,
      menuAberto: false,
      title: "Receitas"
    };
  },
  computed: {
    titlex() {
      return this.$route.meta.title || this.title;
    },
    showToolbar() {
      return this.$route.meta.showToolbar != undefined ? this.$route.meta.showToolbar : true;
    }
  },
  components: {
    AppMenu,
    AppMenuToolbar
  }
};
</script>

