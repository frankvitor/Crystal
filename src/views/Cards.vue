<template>

    <v-container fluid grid-list-lg>
        <v-layout row wrap>

            <v-flex xs12>
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
            </v-flex>
        </v-layout>
    </v-container>

</template>

<style scoped>
h3 {
  color: #2f1300;
}

.v-image {
  margin-left: 8px;
}
</style>

