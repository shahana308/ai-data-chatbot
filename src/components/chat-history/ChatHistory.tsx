"use client";

import { useState } from "react";
import useChatStore from "stores/useChatStore";
import NewChatModal from "./NewChatModal";
import NewChatButton from "./NewChatButton";
import Header from "components/shared/Header";
import { Divider, Input } from "antd";
import ChatHistoryCard from "./ChatHistoryCard";

const ChatHistory = () => {
  const { addChat, chats } = useChatStore();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [newChatTitle, setNewChatTitle] = useState("");
  const [search, setSearch] = useState("");

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
    <div className="flex flex-col w-1/4 bg-white my-5 rounded-3xl overflow-y-auto relative">
      <div className="p-4">
        <Header title="Chat History" />

        <Divider className="!my-0" />

        <Input
          placeholder="Search Chat Groups"
          className="!my-4"
          onChange={(e) => setSearch(e.target.value)}
        />

        <Divider className="!my-0" />
      </div>

      <div className="overflow-y-scroll h-[90vh]">
        <div className="flex-grow p-2 space-y-2">
          {chats
            .filter((chat) =>
              chat.title.toLowerCase().includes(search.toLowerCase())
            )
            .map((chat) => (
              <ChatHistoryCard key={chat.id} chat={chat} />
            ))}
        </div>
        <NewChatButton onClick={() => setIsModalVisible(true)} />
      </div>

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
