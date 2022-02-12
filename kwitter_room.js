const firebaseConfig = {
      apiKey: "AIzaSyCUHG9z2rmCABCfXCcZgxnxkkxDW5KIbtY",
      authDomain: "kwitter-154f7.firebaseapp.com",
      databaseURL: "https://kwitter-154f7-default-rtdb.firebaseio.com",
      projectId: "kwitter-154f7",
      storageBucket: "kwitter-154f7.appspot.com",
      messagingSenderId: "309686173696",
      appId: "1:309686173696:web:f0b33901f190c85bf758e5",
      measurementId: "G-FNXCMTXD78"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";

}
function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose : "adding room name"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}



      //End code
      });});}
getData();
