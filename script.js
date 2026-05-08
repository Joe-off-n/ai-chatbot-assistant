function sendMessage() {
  const input = document.getElementById("user-input");
  const chatBox = document.getElementById("chat-box");
  const userText = input.value.trim();

  if (userText === "") return;

  const userMessage = document.createElement("div");
  userMessage.className = "user-message";
  userMessage.textContent = userText;
  chatBox.appendChild(userMessage);

  const botMessage = document.createElement("div");
  botMessage.className = "bot-message";

  let reply = "Sorry, I do not understand.";

  const text = userText.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    reply = "Hello! How can I help you today?";
  } else if (text.includes("your name")) {
    reply = "I am an AI Chatbot Assistant.";
  } else if (text.includes("help")) {
    reply = "I can answer simple questions and chat with you.";
  } else if (text.includes("bye")) {
    reply = "Goodbye! Have a nice day.";
  }

  setTimeout(() => {
    botMessage.textContent = reply;
    chatBox.appendChild(botMessage);
    chatBox.scrollTop = chatBox.scrollHeight;
  }, 500);

  input.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}
