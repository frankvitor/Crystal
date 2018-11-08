
import firebase from "firebase";

export default {
    logOut() {
        firebase.auth().signOut();
    }
}