<template>
  <v-form>
    <v-container fluid>
      <v-layout row wrap>
        <v-flex xs12>
          <v-text-field label="Título da Receita" v-model="title"></v-text-field>
          <!-- <v-text-field label="Título da Receita"></v-text-field> -->
        </v-flex>
        <v-flex xs12>
          <v-text-field label="Categoria" v-model="autor"></v-text-field>
           <!-- <v-text-field label="Categoria"></v-text-field> -->
        </v-flex>
        <v-flex xs6>
          <v-text-field label="Tempo de preparo"></v-text-field>
        </v-flex>
        <v-flex xs6>
          <v-text-field label="Porções"></v-text-field>
        </v-flex>
        <v-flex xs12>
          <v-divider></v-divider>
        </v-flex>
        <v-flex xs6>
          <h2>Ingredientes</h2>
          <ingrediente></ingrediente>
        </v-flex>
        <v-flex xs6>
          <h2>Modo de preparo</h2>
          <v-btn class="ml-3" color="primary" fab dark small right>
            <v-icon>add</v-icon>
          </v-btn>
        </v-flex>
        <v-flex xs6>
          <h2>Imagens</h2>
          <v-btn class="ml-3" color="primary" fab dark small right>
            <v-icon>add</v-icon>
          </v-btn>
        </v-flex>

      </v-layout>

    </v-container>
    <v-bottom-nav @click="bottomNav" :value="true" absolute aria-setsize="100">
      <v-btn block color="primary" flat value="nearby" @click="incluir()">
        <span>Salvar</span>
        <v-icon>save</v-icon>
      </v-btn>
      <v-btn block color="primary" flat value="nearby">
        <span>Cancelar</span>
        <v-icon>cancel</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-form>

</template>

<style scoped>
h2 {
  color: #ff6600;
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>

<script>
import Ingrediente from "../components/Ingrediente";
import { db } from "@/firebaseConfig";

export default {
  data() {
    return {
      loading: false,
      bottomNav: false,
      bolos: [],
      title: '',
      autor: ''
    };
  },
  firestore() {
    return {
      bolos: db.collection("bolos").orderBy("title")
    };
  },
  methods: {
    incluir() {
      db.collection("bolos").add({
        title: this.title,
        autor: this.autor,
        src: "/imagens/5.png",
        createdAt: new Date()
      });
    }
  },
  components: {
    Ingrediente
  }
};
</script>
