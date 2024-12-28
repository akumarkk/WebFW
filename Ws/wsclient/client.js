const socket = new WebSocket('ws://localhost:8765');

socket.addEventListener('open', function (event) {
//   socket.send('Surya Kumar');
});

socket.addEventListener('message', function (event) {
  console.log('Message from server ', event.data);
  let message = document.createElement('p');
  message.textContent = event.data;
  document.getElementById('message').appendChild(message);
});

socket.onclose = function(event) {
    console.log('WebSocket connection closed:', event);
    // Attempt to reconnect if necessary
};

let form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
  let message = document.getElementById('name').value;
  socket.send(message);
});