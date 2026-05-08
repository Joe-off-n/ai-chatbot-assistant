const chatBox = document.getElementById("chatBox");
const userInput = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

function addMessage(text, sender) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.textContent = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function botReply(message) {
  const text = message.toLowerCase();

  if (text.includes("hello") || text.includes("hi")) {
    return "Hello! How can I help you?";
  } else if (text.includes("name")) {
    return "My name is AI Chatbot Assistant.";
  } else if (text.includes("help")) {
    return "I can answer simple questions for now.";
  } else if (text.includes("bye")) {
    return "Goodbye! Have a great day.";
  } else if (text.includes("ai")) {
    return "AI stands for Artificial Intelligence.";
  } else {
    return "I am still learning. Please ask a simple question.";
  }
}

function sendMessage() {
  const text = userInput.value.trim();

  if (text === "") {
    return;
  }

  addMessage(text, "user");
  userInput.value = "";

  setTimeout(() => {
    const reply = botReply(text);
    addMessage(reply, "bot");
  }, 500);
}

sendBtn.addEventListener("click", sendMessage);

userInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    sendMessage();
  }
});
