import Chatboticon from "./components/chatboticon";

const App = () => {
  return (
    <div className="container">
      <div className="chatbot-popup">
        {/* Chat Header */}
        <div className="chat-header">
          <div className="header-info">
            <Chatboticon />
            <h2 className="logo-text">Chatbot</h2>
          </div>

          <button className="material-symbols-rounded">
            keyboard_arrow_down
          </button>
        </div>
        {/* Chat Body */}
        <div className="chat-body">
          <div className="message bot-message">
            <Chatboticon />
            <p className="message-text">
              Hey there! <br /> How can I assist you today?
            </p>
          </div>
          <div className="message user-message">
            <p className="message-text">How is the weather today?</p>
          </div>
        </div>
        {/* Chat Footer */}
        <div className="chat-footer">
          <form action="#" className="chat-form">
            <input
              type="text"
              placeholder=" message..."
              className="message-input"
              required
            />
            <button className="material-symbols-rounded">arrow_upward</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default App;
