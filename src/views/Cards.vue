<template>

    <v-container fluid grid-list-lg>
        <v-layout row wrap>

            <!-- <v-flex xs12>
                <v-card color="#FFF1E7" class="white--text">
                    <v-layout>
                        <v-flex xs4>
                            <v-img src="bolo.png" alt="Vuetify.js" height="125px" contain></v-img>
                        </v-flex>
                        <v-flex xs6>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline">
                                        <h3>Prestígio</h3>
                                    </div>
                                    <div>
                                        <h4>Diego</h4>
                                    </div>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat icon color="#D10000" dark>
                                <v-icon>favorite</v-icon>
                            </v-btn>
                        </v-flex>

                    </v-layout>
                    <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                        <v-btn slot="activator" href="/Teste" color="primary" dark>
                            Ver receita
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-icon color="#171717">share</v-icon>
                    </v-card-actions>
                </v-card>
            </v-flex>

            <v-flex xs12>
                <v-card color="#FFF1E7" class="white--text">
                    <v-layout row>
                        <v-flex xs4>
                            <v-img src="morango.png" height="125px" contain></v-img>
                        </v-flex>
                        <v-flex xs6>
                            <v-card-title primary-title>
                                <div>
                                    <div class="headline" color="#2F1300">
                                        <h3>Morango</h3>
                                    </div>
                                    <div>
                                        <h4>Frank</h4>
                                    </div>
                                </div>
                            </v-card-title>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat icon color="#D10000" dark>
                                <v-icon>favorite</v-icon>
                            </v-btn>
                        </v-flex>
                    </v-layout>
                    <v-divider light></v-divider>
                    <v-card-actions class="pa-3">
                        <v-btn slot="activator" href="/Teste" color="primary" dark>
                            Ver receita
                        </v-btn>
                        <v-spacer></v-spacer>
                        <v-icon color="#171717">share</v-icon>
                    </v-card-actions>
                </v-card>

            </v-flex> -->
            <v-flex xs12 sm6 md4 lg3 v-for="(item,i) in items" :key="i">
                <v-card>
                    <v-layout row>
                        <v-flex xs4>
                            <v-img :src="item.src"></v-img>
                        </v-flex>
                        <v-flex xs6>
                            <v-card-title primary-title>
                                <div class="headline" color="#2F1300">
                                    <h3>{{ item.title }}</h3>
                                </div>
                                <div>
                                    <h4>{{ item.nome }}</h4>
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
                        <v-btn slot="activator" color="primary" dark>
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
      items: [
        {
          src: "/imagens/1.png",
          title: "Morango",
          nome: "Frank",
          icon: "favorite",
          href: "/Teste"
        },
        {
          src: "/imagens/5.png",
          title: "Prestígio",
          nome: "Diego",
          icon: "favorite",
          href: "/Teste",
          iconCompart: "share"
        },
        {
          src: "/imagens/2.png",
          title: "Acerola",
          nome: "Daniel",
          icon: "favorite",
          href: "/Teste",
          iconCompart: "share"
        }
      ]
    };
  }
};
</script>