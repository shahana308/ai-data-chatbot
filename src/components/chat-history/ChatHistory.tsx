"use client";

import { useState } from "react";
import useChatStore from "stores/useChatStore";
import NewChatModal from "./NewChatModal";
import NewChatButton from "./NewChatButton";
import Header from "components/shared/Header";

const ChatHistory = () => {
  const { addChat, chats } = useChatStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newChatTitle, setNewChatTitle] = useState("");

  const handleOk = () => {
    if (newChatTitle.trim()) {
      addChat({ id: Date.now().toString(), title: newChatTitle, messages: [] });
      setNewChatTitle("");
      setIsModalVisible(false);
    }
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <div className="flex flex-col w-1/4 bg-white p-4 my-5 rounded-3xl overflow-y-auto relative">
      <Header />

      <div className="flex-grow overflow-y-auto p-2 space-y-2 h-[90vh]">
        {chats.map((chat) => (
          <div key={chat.id}>{chat.title}</div>
        ))}
      </div>

      <NewChatButton onClick={() => setIsModalVisible(true)} />

      <NewChatModal
        isVisible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        chatTitle={newChatTitle}
        setChatTitle={setNewChatTitle}
      />
    </div>
  );
};

export default ChatHistory;
