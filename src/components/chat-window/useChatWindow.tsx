import { useMutation } from "@tanstack/react-query";
import { Form, notification } from "antd";
import { useFetchChatMessages, usePostChatMessage } from "api/chat-response";
import { fetchDataAnalysis } from "api/data-analysis-assistant.api";
import { DataAnalysisResponse } from "types/DataAnalysis";

const useChatWindow = () => {
  const [form] = Form.useForm();

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

    saveUserMessage.mutate({
      message: value.message,
      type: "user",
    });
    fetchMessages.refetch();
    fetchBotResponse.mutate(value.message);

    form.resetFields();
  };

  const isLoading = fetchMessages.isFetching || fetchBotResponse.isPending;

  return { form, fetchMessages, isLoading, handleSubmit };
};

export default useChatWindow;
