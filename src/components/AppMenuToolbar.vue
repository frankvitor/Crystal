<template>
    <v-app>
        <v-toolbar color="primary" dark app :clipped-left="clipped">
            <v-toolbar-side-icon @click.stop="menuAberto = !menuAberto"></v-toolbar-side-icon>
            <v-toolbar-title v-text="titlex"></v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
        </v-toolbar>
    </v-app>
</template>

<script>
export default {
  name: "AppMenuToolbar",
  data() {
    return {
      clipped: false,
      menuAberto: false,
      title: "Receitas"
    };
  }
};
</script>