"use client";

import { ChatResponse } from "types/ChatResponse";
import ChatMessage from "./ChatMessage";
import MessageForm from "./MessageForm";
import useChatWindow from "./useChatWindow";
import { Divider, Skeleton } from "antd";
import Header from "components/shared/Header";
import useChatStore from "stores/useChatStore";

const ChatWindow = () => {
  const { form, isLoading, handleSubmit } = useChatWindow();

  const { selectedChat } = useChatStore();

  return (
    <div className="flex flex-col w-2/4 bg-white p-4 m-5 rounded-3xl shadow-lg">
      <div className="flex flex-col flex-grow overflow-y-auto space-y-3">
        <Header title={selectedChat?.title} />

        <Divider className="!mt-0 !mb-4" />

        {selectedChat?.messages.map((msg: ChatResponse, index: number) => (
          <ChatMessage key={index} msg={msg} />
        ))}

        {isLoading && (
          <div className="flex justify-start mt-2">
            <div className="p-3 rounded-lg shadow bg-gray-200 text-quinary max-w-[70%]">
              <Skeleton.Input active />
            </div>
          </div>
        )}
      </div>

      <div className="flex-grow"></div>

      <MessageForm onSubmit={handleSubmit} form={form} isLoading={isLoading} />
    </div>
  );
};

export default ChatWindow;
