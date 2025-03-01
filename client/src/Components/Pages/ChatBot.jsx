import React from "react";
import { useNavigate } from "react-router-dom";
import hake from "../../Images/Hake.jpg";

function ChatBotIcon() {
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-4 right-4 bg-blue-600 p-2 rounded-full shadow-lg cursor-pointer transition-transform transform hover:scale-110"
      onClick={() => navigate("/chatbot")}
    >
      <img src={hake} alt="Chatbot" className="w-12 h-12 rounded-full" />
    </div>
  );
}

export default ChatBotIcon;
