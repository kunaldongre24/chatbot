import React, { useState } from "react";
import chatbotImg from "../images/chatbot.png";

function Chatbot() {
  const [chatbot, setChatbot] = useState(false);
  const toggleChatbot = () => {
    setChatbot(!chatbot);
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
            <div className="chat-body">
              <div class="message-body">
                <img src={chatbotImg} height="35px" width="35px" />
                <div className="text">
                  <div className="info">Bot 10:10 PM</div>
                  <div className="message">
                    Hello there, how can I help you?
                  </div>
                </div>
              </div>
            </div>
            <div className="chat-footer">
              <input type="text" className="input-message" />
              <button type="submit">Send</button>
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
