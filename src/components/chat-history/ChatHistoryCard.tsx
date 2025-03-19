"use client";

import { Chat } from "types/Chat";
import { Typography } from "antd";
import { formatDateToRelativeTime } from "utils/date";
import dayjs from "dayjs";
import useChatStore from "stores/useChatStore";

const { Text } = Typography;

const ChatHistoryCard = ({ chat }: { chat: Chat }) => {
  const bgColor =
    useChatStore.getState().selectedChat?.id === chat.id
      ? "bg-peach-100"
      : "bg-white";

  return (
    <div
      className={`flex flex-col ${bgColor} py-8 px-5 rounded-3xl border border-gray-100`}
      onClick={() => useChatStore.setState({ selectedChat: chat })}
    >
      <div className="flex items-center justify-between">
        <Text className="text-lg font-semibold">{chat.title}</Text>
        <Text>
          {formatDateToRelativeTime(
            dayjs(chat.messages[chat.messages.length - 1]?.timestamp)
          )}
        </Text>
      </div>
    </div>
  );
};

export default ChatHistoryCard;
