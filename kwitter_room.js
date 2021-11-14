
var firebaseConfig = {
      apiKey: "AIzaSyAPOTc5W4WZZ8MEBGQmWoLkZmM7M5lTMNU",
      authDomain: "kwitter-d4fd4.firebaseapp.com",
      databaseURL: "https://kwitter-d4fd4-default-rtdb.firebaseio.com",
      projectId: "kwitter-d4fd4",
      storageBucket: "kwitter-d4fd4.appspot.com",
      messagingSenderId: "100793011761",
      appId: "1:100793011761:web:f43be8bb0d25ec97828f10"
    };
    firebase.initializeApp(firebaseConfig);
Username = localStorage.getItem("Username");
document.getElementById("Username").innerHTML = "Welcome " + Username;
function Add_Room(){
      room_name = document.getElementById("Room_Input").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "Adding Room Name"
      });
      localStorage.setItem("room_name",room_name);
      window.location = "kwitter_page.html";
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      console.log(Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function Logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}