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
   room_name = localStorage.getItem("room_name");
   user_name = localStorage.getItem("Username");
function Send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
      document.getElementById("msg").value = "";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
         console.log(firebase_message_id);
         console.log(message_data);
         Name = message_data['name'];
         Message = message_data['message'];
         Like = message_data['like'];
         Name_with_tag = "<h4>" + Name + "<img class='user_tick' src='tick.png'> </h4>";
         Message_with_tag = "<h4 class='message_h4'>" + Message + "</h4>";
         Like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value="+ Like + " onclick='Update_Like(this.id)'>";
         Span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'> Like: " + Like + "</span></button>";
         row = Name_with_tag + Message_with_tag + Like_button + Span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
getData();
function Update_Like(message_id){
      console.log("Clicked on like button - " + message_id);
      button_id = message_id;
      Likes = document.getElementById(button_id).value;
      Update_Likes = Number(Likes) + 1;
      firebase.database().ref(room_name).child(message_id).update({
            like : Update_Likes
      });
}
function Logout(){
      localStorage.removeItem("Username");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}