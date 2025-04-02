"use client";

import { useState } from "react";
import useChatStore from "stores/useChatStore";
import NewChatModal from "./NewChatModal";
import NewChatButton from "./NewChatButton";
import Header from "components/shared/Header";
import { Divider, Input } from "antd";
import ChatHistoryCard from "./ChatHistoryCard";
import { PlusOutlined } from "@ant-design/icons";

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
    <div className="flex flex-col bg-white my-5 rounded-3xl overflow-y-auto relative w-full md:w-1/3 lg:w-1/4 bg-white overflow-y-auto">
      <div className="p-4">
        <div className="flex justify-between items-center">
          <Header title="Chat History" />
          <PlusOutlined
            className="lg:!hidden"
            onClick={() => setIsModalVisible(true)}
          />
          <Input
            placeholder="Search Chat Groups"
            className="!w-[150px] lg:!hidden"
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <Divider className="!my-0" />

        <div className="hidden lg:block">
          <Input
            placeholder="Search Chat Groups"
            className="!my-4 "
            onChange={(e) => setSearch(e.target.value)}
          />

          <Divider className="!my-0" />
        </div>
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
