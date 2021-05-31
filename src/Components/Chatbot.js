import React, { useState } from "react";
import chatbotImg from "../images/chatbot.png";
import userimage from "../images/dp.png";

function Chatbot() {
  const [chatbot, setChatbot] = useState(false);
  const [messages, setMessages] = useState([
    [
      "hello there I am fine",
      "how are you I am finedfsdfasfdafdsddddddddddddddddddddddddddd",
    ],
  ]);
  const toggleChatbot = () => {
    setChatbot(!chatbot);
  };
  const messagesEndRef = React.createRef();
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const handleSend = (e) => {
    e.preventDefault();
    const message = document.getElementById("message").value;
    if (message && message.trim().length > 0) {
      setMessages([...messages, message]);
      document.getElementById("message").value = "";
      scrollToBottom();
    }
  };
  return (
    <>
      <a className="chat-button" onClick={toggleChatbot}>
        <div className="msg">{chatbot ? "Close" : "Open"} Chatbot</div>
      </a>
      <div
        className="chatbot"
        style={chatbot ? { display: "block" } : { display: "none" }}
      >
        <header></header>
        <div className="flex">
          <div className="chatbox">
            <div className="chat-header">Book Chatbot</div>
            <div className="chat-body" id="chatBody">
              <div className="message-body">
                <img src={chatbotImg} height="35px" width="35px" />
                <div className="text">
                  <div className="info">Bot 10:10 PM</div>
                  <div className="message">
                    Hello there, how can I help you?
                  </div>
                </div>
              </div>
              <div style={{ float: "right", marginRight: "10px" }}>
                {messages.map((message, index) => (
                  <div className="user-message" key={index}>
                    <div className="msg-container">
                      <div
                        style={{
                          display: "flex",
                          width: "max-content",
                          float: "right",
                        }}
                      >
                        <div className="text">
                          <div className="info" style={{ textAlign: "right" }}>
                            User 10:10 PM
                          </div>
                          <div className="message">{message}</div>
                        </div>
                        <img
                          style={{ marginLeft: "10px" }}
                          src={userimage}
                          height="35px"
                          width="35px"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div
                style={{ float: "right", width: "100%", marginTop: "100px" }}
                ref={messagesEndRef}
              ></div>
            </div>

            <div className="chat-footer">
              <form onSubmit={handleSend} method="post">
                <input
                  id="message"
                  type="text"
                  className="input-message"
                  placeholder="Ask something here..."
                />
                <button type="submit">Send</button>
              </form>
            </div>
          </div>
          <div className="result">
            <div className="info" style={{ fontSize: "14px" }}>
              You can ask any question related to the book to the chatbot and it
              will give you the suitable answers
            </div>
            <h1>Answer found in the paragraph</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chatbot;
