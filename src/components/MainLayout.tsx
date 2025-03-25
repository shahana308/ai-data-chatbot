import React from "react";
import Sidebar from "./sidebar/Sidebar";
import ChatHistory from "./chat-history/ChatHistory";
import ChatWindow from "./chat-window/ChatWindow";

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row bg-primary h-screen w-screen">
      <Sidebar />
      <ChatHistory />
      <ChatWindow />
    </div>
  );
};

export default MainLayout;
