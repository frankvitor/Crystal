<template>
  <v-dialog v-model="dialog" persistent max-width="500px">
    <v-btn flat slot="activator" class="ml-3" color="primary" fab dark small right>
      <v-icon>add</v-icon>
    </v-btn>
    <!-- <v-btn flat slot="activator"></v-btn> -->
    <v-card>
      <v-card-title>
        <span class="headline">Ingredientes</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6 md6>
              <v-text-field label="Ingrediente" required></v-text-field>
            </v-flex>
            <v-flex xs12 sm3 md3>
              <v-text-field v-model.number="timeout" label="Quantidade" type="number"></v-text-field>
            </v-flex>
            <v-flex xs12 sm3 md3>
              <v-combobox v-model="select" :items="items" label="Selecione"></v-combobox>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" flat @click.native="dialog = false">Fechar</v-btn>
        <v-btn color="primary" flat @click.native="dialog = false">Adicionar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  data: () => ({
    dialog: false,
     select: 'Escolha',
      items: [
        'Ml',
        'Kg',
        'Qtd',
      ]
  })
};
</script>