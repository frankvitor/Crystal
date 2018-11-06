<template>
    <v-container fluid grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="(item,i) in bolos" :key="i">
                <v-card>
                    <v-layout row>
                        <v-flex xs4>
                            <v-img :src="item.src"></v-img>
                        </v-flex>
                        <v-flex xs6>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline" color="#2F1300">
                                        <h3>{{ item.title }}</h3>
                                    </div>
                                    <div>
                                        <h4>{{ item.autor }}</h4>
                                    </div>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat icon color="#D10000" dark>
                                <v-icon>{{ icon }}</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                        <v-btn flat slot="activator" href="/Teste" color="primary" dark>
                            {{ btnNome }}
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-btn icon @click="remover(item.id)">
                            <v-icon color="#171717">delete</v-icon>
                        </v-btn>
                        <v-btn icon>
                            <v-icon color="#171717">{{ iconCompart }}</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
        <v-btn color="primary" block slot="activator" href="/receita">Adicionar </v-btn>
        <!-- <v-btn color="primary" block @click="incluir()">Adicionar </v-btn> -->
    </v-container>
</template>

<style scoped>
h3,
h4 {
  color: #2f1300;
}

.v-image {
  margin-left: 8px;
}
</style>

<script>
import { db } from "@/main";

export default {
  data() {
    return {
      bolos: [],
      btnNome: "Ver receita",
      iconCompart: "share",
      icon: "favorite"
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
        title: "Novo bolo",
        autor: "Frank",
        src: "/imagens/5.png",
        createdAt: new Date(),
        
      });
    },
    remover(id) {
      db.collection("bolos")
        .doc(id)
        .delete();
    }
  }
};
</script>