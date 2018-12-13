import firebase from 'firebase'
var config = {
  apiKey: "AIzaSyCNUkcThLa9aOuT9N9882xDFsxg6GbjtmM",
  authDomain: "refresh-ideas.firebaseapp.com",
  databaseURL: "https://refresh-ideas.firebaseio.com",
  projectId: "refresh-ideas",
  storageBucket: "refresh-ideas.appspot.com",
  messagingSenderId: "179006617106"
};
var fire = firebase.initializeApp(config);
export default fire;
