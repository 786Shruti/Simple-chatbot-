const chatContainer = document.getElementById('chat-container');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');

function addMessage(text, className) {
  const msg = document.createElement('div');
  msg.className = `message ${className}`;
  msg.innerText = text;
  chatContainer.appendChild(msg);
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

sendBtn.addEventListener('click', () => {
  const text = userInput.value.trim();
  if (!text) return;

  addMessage(text, 'user');
  userInput.value = '';

  // Simulate bot response (replace with Dialogflow call later)
  setTimeout(() => {
    const botReply = getBotResponse(text); // Dummy for now
    addMessage(botReply, 'bot');
  }, 500);
});

function getBotResponse(text) {
  // Dummy example responses (just for now)
  if (text.toLowerCase().includes('html')) return "HTML is used to structure content on the web.";
  if (text.toLowerCase().includes('cloud')) return "Cloud computing means storing and accessing data over the internet.";
  return "Sorry, I’m still learning! Try asking something else about Web or Cloud.";
}
