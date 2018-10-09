<template>
    <v-content>
        <v-container fluid fill-height>
            <v-layout align-center justify-center>
                <v-flex xs12 sm6 md6>
                    <v-form>
                        <v-text-field prepend-icon="person" v-model="name" label="E-mail" type="text" required></v-text-field>
                        <v-text-field prepend-icon="lock" v-model="password" label="Senha" type="password" required></v-text-field>
                    </v-form>
                    <v-flex xs12>
                        <v-spacer></v-spacer>
                        <v-btn block="activator" href="/" color="#b0bec5" dark large>Entrar</v-btn>
                    </v-flex>
                    <v-flex xs12 sm6>
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