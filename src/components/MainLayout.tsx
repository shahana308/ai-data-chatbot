import React from "react";
import Sidebar from "./Sidebar";
import ChatHistory from "./ChatHistory";
import ChatWindow from "./chatwindow/ChatWindow";

const MainLayout = () => {
  return (
    <div className="flex bg-primary h-screen w-screen">
      <h1 className="text-primary">This should be primary color</h1>

      <Sidebar />
      <ChatHistory />
      <ChatWindow />
    </div>
  );
};

export default MainLayout;
