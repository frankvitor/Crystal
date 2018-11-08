<template>
  <div ref="container" id="firebaseui-auth-container"></div>
</template>
<script>
import firebase from "firebase";
import firebaseui from "firebaseui";

export default {
  name: "auth",
  mounted() {
    var uiConfig = {
      signInSuccessUrl: "/",
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID,
        firebase.auth.FacebookAuthProvider.PROVIDER_ID
      ]
    };
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    console.log(this.$refs.container)
    ui.start(this.$refs.container, uiConfig);
  }
};
</script>