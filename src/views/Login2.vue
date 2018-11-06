<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm6 md6>
                <v-form>
                    <v-text-field prepend-icon="person" v-model="email" label="E-mail" type="text" required></v-text-field>
                    <v-text-field prepend-icon="lock" v-model="password" label="Senha" type="password" required></v-text-field>
                </v-form>
                <v-btn v-on:click="login" block color="#b0bec5" dark large>Entrar</v-btn>
                <v-layout>
                    <v-btn flat slot="activator" href="/">Esqueceu a senha?</v-btn>
                    <v-spacer></v-spacer>
                    <cadastro></cadastro>
                </v-layout>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import Cadastro from "../components/Cadastro";
import AppMenuToolbar from "../components/AppMenuToolbar";
import firebase from 'firebase';

export default {
  name: "login",
  data: function() {
    return {
      drawer: null,
      email: "",
      password: ""
    };
  },
  methods: {
    login: function() {
      firebase.auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert("Bem-Vindo.");
            console.log(user);
            this.$router.push("/cards");
          },
          err => alert(err.message)
        );
    }
  },
  props: {
    source: String
  },
  components: {
    Cadastro,
    AppMenuToolbar
  }
};
</script>