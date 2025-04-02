import { useMutation } from "@tanstack/react-query";
import { Form, notification } from "antd";
import { useFetchChatMessages, usePostChatMessage } from "api/chat-response";
import { fetchDataAnalysis } from "api/data-analysis-assistant.api";
import { useEffect } from "react";
import useChatStore from "stores/useChatStore";
import { DataAnalysisResponse } from "types/DataAnalysis";
import { ChatResponse } from "types/ChatResponse";
import { Chat } from "types/Chat";

const useChatWindow = () => {
  const [form] = Form.useForm();

  const { addChat, clearChats } = useChatStore();

  const fetchMessages = useFetchChatMessages();
  const saveUserMessage = usePostChatMessage();
  const saveBotResponse = usePostChatMessage();

  const fetchBotResponse = useMutation<DataAnalysisResponse, Error, string>({
    mutationFn: fetchDataAnalysis,
    onSuccess: (data: DataAnalysisResponse) => {
      const reasoning = data.choices?.[0].message.reasoning;
      saveBotResponse.mutate({
        message: reasoning,
        type: "bot",
        title: useChatStore.getState().selectedChat?.title || "",
        id: useChatStore.getState().selectedChat?.id || "",
      });
    },
    onError: (error: Error) => {
      notification.error({
        message: "Error",
        description: error.message,
      });
    },
  });

  const handleSubmit = (value: { message: string }) => {
    if (value.message.trim() === "") return;

    const { selectedChat, chats } = useChatStore.getState();

    if (selectedChat) {
      const newMessage = {
        id: Date.now().toString(),
        user_message: value.message,
        bot_message: null,
        timestamp: new Date().toISOString(),
        title: selectedChat.title,
        isFavorite: false,
        isSaved: false,
      };

      const updatedChat = {
        ...selectedChat,
        messages: [...selectedChat.messages, newMessage],
      };

      useChatStore.setState({
        selectedChat: updatedChat,
        chats: chats.map((chat) =>
          chat.id === selectedChat.id ? updatedChat : chat
        ),
      });

      saveUserMessage.mutate({
        message: value.message,
        type: "user",
        title: selectedChat.title,
        id: selectedChat.id,
      });

      fetchBotResponse.mutate(value.message);
    }

    form.resetFields();
  };

  const isLoading = fetchMessages.isFetching || fetchBotResponse.isPending;

  useEffect(() => {
    if (fetchMessages.data) {
      clearChats();

      const formattedChats = fetchMessages.data.reduce(
        (acc: Chat[], message: ChatResponse) => {
          const {
            id,
            title,
            bot_message,
            user_message,
            timestamp,
            isFavorite,
            isSaved,
          } = message;

          let chat = acc.find((c: Chat) => c.id === id);
          if (!chat) {
            chat = { id, title, isFavorite, isSaved, messages: [] };
            acc.push(chat);
          }

          chat.messages.push({
            id,
            title,
            bot_message,
            user_message,
            timestamp,
          });

          return acc;
        },
        []
      );

      formattedChats.forEach((chat: Chat) => addChat(chat));

      const { selectedChat } = useChatStore.getState();
      if (!selectedChat && formattedChats.length > 0) {
        useChatStore.setState({
          selectedChat: formattedChats[0],
        });
      } else {
        useChatStore.setState({
          selectedChat: formattedChats.find(
            (chat: Chat) => chat.id === selectedChat?.id
          ),
        });
      }
    }
  }, [fetchMessages.data]);

  return { form, isLoading, handleSubmit };
};

export default useChatWindow;
