const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');
const roomName = document.getElementById('room-name');
const userList = document.getElementById('users');
const myButton= document.getElementsByClassName('myButton');
// Get username and room from URL
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});

const socket = io();

// Join chatroom`
socket.emit('joinRoom', { username, room });

// Get room and users
socket.on('roomUsers', ({ room, users }) => {
  outputRoomName(room);
  outputUsers(users);
});
  

// Message from server
// socket.on('message', (message) => {
//   console.log(message);
//   outputMessage(message);

//   // Scroll down
//   chatMessages.scrollTop = chatMessages.scrollHeight;
// });

// Message submit
// chatForm.addEventListener('submit', (e) => {
//   e.preventDefault();

//   // Get message text
//   let msg = e.target.elements.msg.value;

//   msg = msg.trim();

//   if (!msg) {
//     return false;
//   }

//   // Emit message to server
//   socket.emit('chatMessage', msg);

//   // Clear input
//   e.target.elements.msg.value = '';
//   e.target.elements.msg.focus();
// });

// Output message to DOM
// function outputMessage(message) {
//   const div = document.createElement('div');
//   div.classList.add('message');
//   const p = document.createElement('p');
//   p.classList.add('meta');
//   p.innerText = message.username;
//   p.innerHTML += `<span>${message.time}</span>`;
//   div.appendChild(p);
//   const para = document.createElement('p');
//   para.classList.add('text');
//   para.innerText = message.text;
//   div.appendChild(para);
//   document.querySelector('.chat-messages').appendChild(div);
// }

// Add room name to DOM
function outputRoomName(room) {
  roomName.innerText = room;
}

// Add users to DOM
function outputUsers(users) {
  userList.innerHTML = '';
  users.forEach((user) => {
    const button = document.createElement('button');
    button.classList.add("myButton");
    button.id=user.username;
    button.innerText = user.username;
    userList.appendChild(button);

    button.addEventListener('click',()=>{
      if(username!=user.username){
        console.log("Hii "+undoStack.length+" "+user.id);
        for(let i=0;i<undoStack.length;i++){
          var a= user.id;
          var b= undoStack[i].desc;
          var c= undoStack[i];
          if(b==="md"){
            socket.emit("mousedown",{a,c});
          }
          else{
            socket.emit("mousemove",{a,c});
          }
          // socket.emit(b,c);
        }
        // for(let i=0;i<undoStack.length;i++){
        //   io.to(user.id).emit("event", data);
        //   socket.emit(undoStack[i].desc, undoStack[i]);
        // }
        // copy user.name content to username content
        // alert("Hii "+user.username);
        // var name= user.username;
        // socket.emit('copyContent', {name,username, room });
        
        
      }
    })
    
  });
}


//Prompt the user before leave chat room
document.getElementById('leave-btn').addEventListener('click', () => {
  const leaveRoom = confirm('Are you sure you want to leave the chatroom?');
  if (leaveRoom) {
    window.location = '../index.html';
  } else {
  }
});

// myButton[0].addEventListener('click',() => {
//   alert("Hii "+username);
// });


console.log(username);

// window.onload=function(){
//   document.getElementById('Desi').addEventListener('click',()=>{
//     console.log(username);
//     alert('Hii'); 
//   })
// }
