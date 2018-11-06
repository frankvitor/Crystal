<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn flat slot="activator">Cadastre-se</v-btn>
    <v-card>
      <v-card-title>
        <span class="headline">Cadastro</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md6>
              <v-text-field label="Nome" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md6>
              <v-text-field label="Sobrenome" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Email" v-model="email" required></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field label="Senha" v-model="password" type="password" required></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
        <small>*Campo obrigatório</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click.native="dialog = false">Fechar</v-btn>
        <v-btn color="primary" flat @click="cadastro">Salvar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import firebase from 'firebase';


export default {
  name: "cadastro",
  data: function() {
    return {
      dialog: false,
      drawer: null,
      email: "",
      password: ""
    };
  },
  methods: {
    cadastro: function() {
      firebase.auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          function(user) {
            console.log(user);
            alert("Cadastro criado com sucesso.");
          },
          function(err) {
            alert("Ops." + err.message);
          }
        );
    }
  }
};
</script>