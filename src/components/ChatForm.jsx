import { useRef } from "react";

const ChatForm = ({ chatHistory, setChatHistory, generateBotResponse }) => {
  const inputRef = useRef(null);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const userMessage = inputRef.current.value.trim();
    if (!userMessage) return;

    inputRef.current.value = "";
    // Update chat history with user message
    setChatHistory((prevHistory) => [
      ...prevHistory,
      { role: "user", text: userMessage },
    ]);

    // Add a "thinking..." message from the bot after a short delay
    setTimeout(
      () =>
        setChatHistory((prevHistory) => [
          ...prevHistory,
          { role: "model", text: "Thinking..." },
        ]),
      600
    );

    // Generate bot response
    generateBotResponse([...chatHistory, { role: "user", text: userMessage }]);
  };
  return (
    <form action="#" className="chat-form" onSubmit={handleFormSubmit}>
      <input
        ref={inputRef}
        type="text"
        placeholder=" message..."
        className="message-input"
        required
      />
      <button className="material-symbols-rounded">arrow_upward</button>
    </form>
  );
};

export default ChatForm;
