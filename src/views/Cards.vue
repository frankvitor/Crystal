<template>

    <v-container fluid grid-list-lg>
        <v-layout row wrap>
            <v-flex xs12 sm6 md4 lg3 v-for="(item,i) in items" :key="i">
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
                                        <h4>{{ item.nome }}</h4>
                                    </div>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat icon color="#D10000" dark>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                        <v-btn slot="activator" href="/Teste" color="primary" dark>
                            {{ btnNome }}
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-icon color="#171717">{{ iconCompart }}</v-icon>
                    </v-card-actions>
                </v-card>
            </v-flex>
        </v-layout>
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
export default {
  data() {
    return {
      btnNome: "Ver receita",
      iconCompart: "share",
      icon: "favorite",
      items: [
        {
          src: "/imagens/1.png",
          title: "Morango",
          nome: "Frank"
        },
        {
          src: "/imagens/5.png",
          title: "Prestígio",
          nome: "Diego",
        },
        {
          src: "/imagens/4.png",
          title: "s",
          nome: "Daniel",
        }
      ]
    };
  }
};
</script>