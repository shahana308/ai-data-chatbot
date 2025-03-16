import React from "react";
import Sidebar from "./Sidebar";
import ChatHistory from "./ChatHistory";
import ChatWindow from "./ChatWindow";

const MainLayout = () => {
  return (
    <div className="flex bg-[#0e1e46] h-screen w-screen">
      <Sidebar />
      <ChatHistory />
      <ChatWindow />
    </div>
  );
};

export default MainLayout;
