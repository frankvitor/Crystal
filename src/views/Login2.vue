<template>

  <div>
    <progress
      value="0"
      max="100"
      id="uploader"
    >0%</progress>
    <input
      type="file"
      value="upload"
      id="fileButton"
    />
  </div>

</template>

<script>
import firebase from "firebase";

export default {
  data() {
    return {
      uploadTask: "",
      err: "",
      rootRef: ''
    };
  },
  mounted(){
//Get elements
var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");

// listen for file selection
fileButton.addEventListener("change", function(e) {
  //Get file
  var file = e.target.files[0];

  //create storage ref
  let storageRef =firebase.storage().ref("imagens/" + file.name);
      

  // Upload file
  var task = storageRef.put(file);
  // Update progress bar
  task.on(
    "state_changed",

    function progress(snapshot) {
      var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      uploader.value = percentage;
    },

    //function error(err) {},

    function complete() {}
  );
});

  }
};
</script>

<style media="screen">
#doby {
  display: flex;
  min-height: 100vh;
  width: 100%;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

#uploader {
  appearance: none;
  width: 50%;
  margin: 10px;
}
</style>