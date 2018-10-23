<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm6 md6>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Login</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-card-text>
              <v-form>
                <v-text-field prepend-icon="person" name="login" label="Email" type="text"></v-text-field>
                <v-text-field prepend-icon="lock" name="password" label="Senha" type="password"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn slot="activator" href="/" color="#b0bec5" dark>Entrar</v-btn>
            </v-card-actions>
          </v-card>
          <v-flex xs12 md4>
              <v-btn flat slot="activator" href="/">Esqueceu a senha?</v-btn>   
              <cadastro></cadastro>
          </v-flex>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import Cadastro from "../components/Cadastro";

export default {
  data: () => ({
    drawer: null
  }),
  props: {
    source: String
  },
   components: {
    Cadastro
  }
};
</script>