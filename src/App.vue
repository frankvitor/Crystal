<template>
  <v-app>
    <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app width="180">
      <v-flex xs12 sm4 text-xs-center v-for="(item, i) in items" :key="i">
        <div>
          <v-icon v-html="item.icon" color="#FF6600"></v-icon>
          <v-btn flat color="#FF6600" v-text="item.title"></v-btn>
        </div>
      </v-flex>
    </v-navigation-drawer>
    <v-toolbar color="#FF6600" dark app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="rightDrawer = !rightDrawer">
        <v-icon>search</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view />
    </v-content>
    <v-navigation-drawer temporary :right="right" v-model="rightDrawer" fixed app>
      <v-list>
        <v-list-tile @click="right = !right">
          <v-list-tile-action>
            <v-icon>info</v-icon>
          </v-list-tile-action>
          <v-list-tile-title>Informações</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-footer :fixed="fixed" app>
      <span>&copy; 2018</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "view_list",
          title: "Menu"
        },
        {
          icon: "home",
          title: "Inicio"
        },
        {
          icon: "local_dining",
          title: "Categoria"
        },
        {
          icon: "favorite_border",
          title: "Favoritos"
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      sair: "/",
      title: "Receitas"
    };
  }
};
</script>

