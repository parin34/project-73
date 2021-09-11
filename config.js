import firebase from 'firebase'
require("@firebase/firestore")


  const firebaseConfig = {
    apiKey: "AIzaSyDOaMnUAlTcxzDQWxlhT_eJLjGyBPSDVm0",
    authDomain: "project-73-3fff5.firebaseapp.com",
    databasetURL:'https://project-73-3fff5.firebaseio.com',
    projectId: "project-73-3fff5",
    storageBucket: "project-73-3fff5.appspot.com",
    messagingSenderId: "795483151044",
    appId: "1:795483151044:web:ebeec88190e8f1db488791"
  };
 

  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

