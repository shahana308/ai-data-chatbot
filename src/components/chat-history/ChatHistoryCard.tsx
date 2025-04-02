"use client";

import { Chat } from "types/Chat";
import { Typography } from "antd";
import { formatDateToRelativeTime } from "utils/date";
import dayjs from "dayjs";
import useChatStore from "stores/useChatStore";
import { HeartFilled } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons";
import { SaveOutlined } from "@ant-design/icons";
import { SaveFilled } from "@ant-design/icons";

const { Text } = Typography;

const ChatHistoryCard = ({ chat }: { chat: Chat }) => {
  const bgColor =
    useChatStore.getState().selectedChat?.id === chat.id
      ? "bg-peach-100"
      : "bg-white";

  const handleFavorite = () => {
    if (chat) {
      useChatStore.setState({
        chats: useChatStore
          .getState()
          .chats.map((c) =>
            c.id === chat.id ? { ...c, isFavorite: !c.isFavorite } : c
          ),
        selectedChat: { ...chat, isFavorite: !chat.isFavorite },
      });
    }
  };

  const handleSave = () => {
    if (chat) {
      useChatStore.setState({
        chats: useChatStore
          .getState()
          .chats.map((c) =>
            c.id === chat.id ? { ...c, isSaved: !c.isSaved } : c
          ),
        selectedChat: { ...chat, isSaved: !chat.isSaved },
      });
    }
  };

  console.log(useChatStore.getState().selectedChat);
  return (
    <div
      className={`flex flex-col ${bgColor} py-8 px-5 rounded-3xl border border-gray-100`}
      onClick={() => useChatStore.setState({ selectedChat: chat })}
    >
      <div className="flex items-center justify-between">
        <Text className="text-lg font-semibold">{chat.title}</Text>
        <Text className="!text-xs !text-gray-500">
          {formatDateToRelativeTime(
            dayjs(chat.messages[chat.messages.length - 1]?.timestamp)
          )}
        </Text>
      </div>
      <div className="flex justify-end gap-3">
        <span
          className="cursor-pointer hover:text-red-500 transition-colors text-xl"
          onClick={handleFavorite}
        >
          {chat?.isFavorite ? (
            <HeartFilled className="!text-red-500 !h-4 !w-4" />
          ) : (
            <HeartOutlined className="!h-4 !w-4" />
          )}
        </span>
        <span
          className="cursor-pointer hover:text-blue-500 transition-colors text-xl"
          onClick={handleSave}
        >
          {chat?.isSaved ? (
            <SaveFilled className="!text-blue-500 !h-4 !w-4" />
          ) : (
            <SaveOutlined className="!h-4 !w-4" />
          )}
        </span>
      </div>
    </div>
  );
};

export default ChatHistoryCard;
