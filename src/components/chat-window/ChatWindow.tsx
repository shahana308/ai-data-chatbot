"use client";

import { ChatResponse } from "types/ChatResponse";
import ChatMessage from "./ChatMessage";
import MessageForm from "./MessageForm";
import useChatWindow from "./useChatWindow";
import { Divider, Skeleton } from "antd";
import Header from "components/shared/Header";
import useChatStore from "stores/useChatStore";
import {
  HeartOutlined,
  HeartFilled,
  SaveOutlined,
  SaveFilled,
} from "@ant-design/icons";
import { useEffect, useRef } from "react";

const ChatWindow = () => {
  const { form, isLoading, handleSubmit } = useChatWindow();
  const { chats, selectedChat } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [chats, selectedChat, isLoading]);

  const handleFavorite = () => {
    if (selectedChat) {
      useChatStore.setState({
        chats: useChatStore
          .getState()
          .chats.map((c) =>
            c.id === selectedChat.id ? { ...c, isFavorite: !c.isFavorite } : c
          ),
        selectedChat: { ...selectedChat, isFavorite: !selectedChat.isFavorite },
      });
    }
  };

  const handleSave = () => {
    if (selectedChat) {
      useChatStore.setState({
        chats: useChatStore
          .getState()
          .chats.map((c) =>
            c.id === selectedChat.id ? { ...c, isSaved: !c.isSaved } : c
          ),
        selectedChat: { ...selectedChat, isSaved: !selectedChat.isSaved },
      });
    }
  };

  return (
    <div className="flex flex-col bg-white rounded-3xl shadow-lg w-full md:w-2/3 lg:w-1/2 lg:m-5 bg-gray-100 flex-grow p-4 ">
      <div className="flex flex-col flex-grow overflow-y-auto space-y-3">
        <div className="flex items-center justify-between">
          <Header title={selectedChat?.title} />
          <div className="flex gap-3">
            <span
              className="cursor-pointer hover:text-red-500 transition-colors text-xl"
              onClick={handleFavorite}
            >
              {selectedChat?.isFavorite ? (
                <HeartFilled className="!text-red-500" />
              ) : (
                <HeartOutlined />
              )}
            </span>
            <span
              className="cursor-pointer hover:text-blue-500 transition-colors text-xl"
              onClick={handleSave}
            >
              {selectedChat?.isSaved ? (
                <SaveFilled className="!text-blue-500" />
              ) : (
                <SaveOutlined />
              )}
            </span>
          </div>
        </div>

        <Divider className="!mt-0 !mb-4" />

        {chats
          .filter((chat) => chat.id === selectedChat?.id)
          .flatMap((chat) => chat.messages)
          .map((msg: ChatResponse, index: number) => (
            <ChatMessage key={index} msg={msg} />
          ))}

        {isLoading && (
          <div className="flex justify-start mt-2">
            <div className="p-3 rounded-lg shadow bg-gray-200 text-quinary max-w-[70%]">
              <Skeleton.Input active />
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="flex-grow"></div>

      <MessageForm onSubmit={handleSubmit} form={form} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;
