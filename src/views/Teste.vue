<template>
    <v-container>
        <v-layout row wrap>
            <h1>Bolo prestigio</h1>
            <v-spacer></v-spacer>
            <v-rating v-model="rating" dark color="red"></v-rating>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <v-carousel class="mb-5">
                    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
                </v-carousel>
            </v-flex>
        </v-layout>
        <v-layout column align-center>
            <blockquote>
                <v-flex xs12  mb-2>
                    <v-expansion-panel>
                        <v-expansion-panel-content>
                            <div slot="header">
                                <h2>Ingredientes</h2>
                            </div>
                            <v-card>
                                <h3 class="mb-2">Bolo</h3>
                                <ul style="list-style-type:disc">
                                    <li>3 ovos</li>
                                    <li>1 xícara(chá) de leite</li>
                                    <li>1/2 xícara(chá) de óleo</li>
                                    <li>1 xícara(chá) de açúcar</li>
                                    <li>1 xícara(chá) chocolate em pó</li>
                                    <li>2 xícaras(chá) de farinha de trigo</li>
                                    <li>1 colher(sopa) de fermento</li>
                                    <li>coco ralado à gosto</li>
                                </ul>

                                <h3 class="mb-2">Calda</h3>

                                <ul style="list-style-type:disc">
                                    <li>1 garrafa de leite de coco</li>
                                    <li>1 xícara(chá) de leite</li>
                                    <li>3 colheres(sopa) de açúcar</li>
                                </ul>

                                <h3 class="mb-2">Recheio</h3>
                                <ul style="list-style-type:disc">
                                    <li>1 lata de leite condensado</li>
                                    <li>1 colher(sopa) de margarina</li>
                                    <li>100g coco ralado</li>
                                </ul>

                                <h3 class="mb-2">Cobertura</h3>
                                <ul style="list-style-type:disc">
                                    <li>3 colheres(sopa) de margarina</li>
                                    <li>8 colheres(sopa) de açúcar</li>
                                    <li>2 colheres(sopa) de chocolate em pó</li>
                                    <li>2 xícaras(chá) de leite</li>
                                </ul>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
                <v-flex xs12 mb-2>
                    <v-expansion-panel>
                        <v-expansion-panel-content>
                            <div slot="header">
                                <h2>Modo de preparo</h2>
                            </div>
                            <v-card>
                                <h3 class="mb-2">Bolo</h3>
                                <ul style="list-style-type:disc">
                                    <li>Bata no liquidificador, os ovos, o óleo e o leite por 3 minutos e reserve</li>
                                    <li>Em um recipiente, misture o açúcar, o trigo, o fermento, o chocolate e o coco ralado à gosto</li>
                                    <li>Despeje sobre a mistura do liquidificador e mexa até que a massa fique consistente</li>
                                    <li>Despeje a massa em uma forma untada e leve ao forno médio, preaquecido, por 30 minutos ou até que ao enfiar um garfo, este saia limpo</li>
                                    <li>Deixe esfriar, corte ao meio e reserve</li>
                                </ul>
                                <h3 class="mb-2">Calda</h3>
                                <ul style="list-style-type:disc">
                                    <li>Em um recipiente, misture o leite de coco, o leite e o açúcar e despeje sobre a massa cortada ao meio para umidecê-la</li>
                                </ul>
                                <h3 class="mb-2">Recheio</h3>
                                <ul style="list-style-type:disc">
                                    <li>Em uma panela, leve o leite condensado, a margarina e o coco ralado ao fogo até desgrudar do fundo e recheie o bolo</li>
                                    <li>Cubra com a outra metade da massa, faça alguns furos com o garfo e despeje mais calda</li>
                                </ul>
                                <h3 class="mb-2">Cobertura</h3>
                                <ul style="list-style-type:disc">
                                    <li>Leve a margarina, o açúcar, o chocolate em pó e o leite ao fogo até obter uma consistência firme e cubra o bolo</li>
                                    <li>Leve a geladeira por aproximadamente 45 minutos</li>
                                </ul>
                            </v-card>
                        </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-flex>
            </blockquote>
        </v-layout>

    </v-container>
</template>

<style scoped>
h1 {
  color: #FF6600;
}
h2 {
  color: grey;

}
li {
  color: darkgray;
}
blockquote {
  width: 100%;
}
blockquote.v-expansion-panel-content{
    background: #FF6600;
    font-size: 40px;
}
</style>

<script>
export default {
  data() {
    return {
      rating: 2,
      items: [
        {
          src: "/imagens/1.png"
        },
        {
          src:
            "/imagens/2.png"
        },
        {
          src:
            "/imagens/3.png"
        },
        {
          src:
            "/imagens/4.png"
        },
        {
          src:
            "/imagens/5.png"
        }
      ]
    };
  }
};
</script>
