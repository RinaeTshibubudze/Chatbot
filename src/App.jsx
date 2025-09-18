import ChatbotIcon from "./components/chatboticon";
import ChatForm from "./components/ChatForm";
import ChatMessage from "./components/ChatMessage";
import { useState } from "react";

const App = () => {
  const [chatHistory, setChatHistory] = useState([]);
  const generateBotResponse = async (history) => {
    history = history.map(({ role, text }) => ({
      role,
      parts: [{ text }],
    }));
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": import.meta.env.VITE_GEMINI_API_KEY,
      },
      body: JSON.stringify({ contents: history }),
    };
    try {
      const response = await fetch(
        import.meta.env.VITE_API_URL,
        requestOptions
      );
      const data = await response.json();
      if (!response.ok)
        throw new Error(data.error.message || "Something went wrong!");
      console.log(data);
    } catch (error) {
      console.log("Error fetching bot response:", error);
    }
  };
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-info">
            <ChatbotIcon />
            <h2 className="logo-text">Chatbot</h2>
          </div>

          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chat Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <ChatbotIcon />
            <p className="message-text">
              Hey there! <br /> How can I assist you today?
            </p>
          </div>
          {chatHistory.map((chat, index) => (
            <ChatMessage key={index} chat={chat} />
          ))}
        </div>
        {/* Chat Footer */}
        <div className="chat-footer">
          <ChatForm
            chatHistory={chatHistory}
            setChatHistory={setChatHistory}
            generateBotResponse={generateBotResponse}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
