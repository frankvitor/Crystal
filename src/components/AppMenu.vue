<template>
  <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app width="180">
    <v-img :aspect-ratio="8/3" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg">

      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <v-icon x-large>account_circle</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title class="white--text font-weight-bold">Frank Vítor</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-img>
    <v-divider></v-divider>

    <v-list dense class="pt-0">
      <v-list-tile v-for="item in items" :key="item.title" :to="item.href">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
export default {
  name: "AppMenu",
  props: {
    value: Boolean
  },
  data() {
    return {
      clipped: false,
      fixed: false,
      items: [
        {
          icon: "home",
          title: "Inicio",
          href: "/"
        },
        {
          icon: "local_dining",
          title: "Categorias",
          href: "/Teste"
        },
        {
          icon: "favorite_border",
          title: "Favoritos"
        },
        {
          icon: "exit_to_app",
          title: "Sair",
          href: "/Login"
        }
      ],
      miniVariant: false
    };
  },
  computed: {
    drawer: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      }
    }
  }
};
</script>
<style scoped>
h3 {
  color: #2f1300;
}
</style>

