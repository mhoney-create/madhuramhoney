import React from "react";
import chatbotlogo from "../../assets/chatbotlogo.png";
import { QuestionMarkIcon } from "@radix-ui/react-icons";
import "./chatbot.css";
const Chatbot = () => {
  return (
    <div className="container">
      <img src={chatbotlogo} alt="chat bot logo" className="imagecontainer" />
      <QuestionMarkIcon />
    </div>
  );
};

export default Chatbot;
