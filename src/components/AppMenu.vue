<template>
  <v-navigation-drawer persistent :mini-variant="miniVariant" :clipped="clipped" v-model="drawer" enable-resize-watcher fixed app width="280">
    <!-- <v-img :aspect-ratio="8/3" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"> -->
    <v-img :aspect-ratio="8/3" src="imagens/testeFundo5.png">   
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img :src="photo" width="54px"/>
          </v-list-tile-avatar>

        </v-list-tile>
        <v-list-tile-content>
          <v-list-tile-title id="a" class="white--text font-weight-bold px-2">{{ this.user.displayName }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-content>
          <v-list-tile-title class="white--text font-weight-bold px-2">{{ email }}</v-list-tile-title>
        </v-list-tile-content>

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

      <v-list-tile @click="sair">
        <v-list-tile-action>
          <v-icon>exit_to_app</v-icon>
        </v-list-tile-action>

        <v-list-tile-content>
          <v-list-tile-title>Sair</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>

  </v-navigation-drawer>
</template>

<script>
import authentication from "@/services/authentication";
import firebase from "firebase";

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
          href: "/Cards"
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
          icon: "add",
          title: "Receita",
          href: "/Receita"
        }
      ],
      photo: "",
      email: "",
      name: "",
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
    },
    user() {
      return firebase.auth().currentUser;
    }
  },
  mounted() {
    if (this.user) {
      this.name = this.user.displayName;
      this.email = this.user.email;
      this.photo = this.user.photoURL;
      this.userId = this.user.uid;
    }
  },
  methods: {
    sair() {
      authentication.logOut();
    }
  }
};
</script>
<style scoped>
h3 {
  color: #2f1300;
}
.a{
  font-size: 50px;
}
</style>

