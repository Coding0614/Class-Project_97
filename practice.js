var firebaseConfig = {
    apiKey: "AIzaSyAPOTc5W4WZZ8MEBGQmWoLkZmM7M5lTMNU",
    authDomain: "kwitter-d4fd4.firebaseapp.com",
    databaseURL: "https://kwitter-d4fd4-default-rtdb.firebaseio.com",
    projectId: "kwitter-d4fd4",
    storageBucket: "kwitter-d4fd4.appspot.com",
    messagingSenderId: "100793011761",
    appId: "1:100793011761:web:f43be8bb0d25ec97828f10"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function Add_User(){
    User_Name = document.getElementById("Username").value;
    firebase.database().ref("/").child(User_Name).update({
        purpose: "Adding User"
    });
}