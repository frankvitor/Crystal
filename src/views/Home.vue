<template>
  <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <img src="@/assets/Corinthians.png" alt="Vuetify.js" class="mb-5">
        <blockquote>
          &#8220;A história do Sport Club Corinthians Paulista cobre mais de um século de futebol do clube brasileiro baseado em São Paulo, fundado em 1 de setembro de 1910 e reconhecido como um dos mais bem-sucedidos entre as equipes do futebol do Brasil.&#8221;
          <footer>
            <small>
              <em>&mdash;Frank Vitor</em>
            </small>
          </footer>
        </blockquote>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
img {
width: 200px;
}
</style>
