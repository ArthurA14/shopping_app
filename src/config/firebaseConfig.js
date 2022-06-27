import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyDxw1zpBBZIlrRXuUCOXY_sgcPvQxSnzMI",
  authDomain: "projetwebefrei.firebaseapp.com",
  databaseURL: "https://projetwebefrei-default-rtdb.firebaseio.com",
}

firebase.initializeApp(config);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export default config
export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
