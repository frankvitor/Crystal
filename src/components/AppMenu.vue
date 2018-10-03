<template>
  <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app width="180">
    <v-toolbar dark color="primary">
      <v-list>
        <v-list-tile>
          <v-list-tile-title class="title">
            Receitaria v1.0.3
          </v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-toolbar>

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
          title: "Categoria",
          href: "/Teste"
        },
        {
          icon: "favorite_border",
          title: "Favoritos"
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

