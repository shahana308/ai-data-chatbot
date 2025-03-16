import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const SHEETDB_API_URL = process.env.NEXT_PUBLIC_SHEETDB_API_URL || "";

export const useFetchChatMessages = () => {
  return useQuery({
    queryKey: ["chatMessages"],
    queryFn: async () => {
      const res = await fetch(SHEETDB_API_URL);
      return res.json();
    },
  });
};

export const usePostChatMessage = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      message,
      type,
    }: {
      message: string;
      type: "user" | "bot";
    }) => {
      const timestamp = new Date().toISOString();
      const payload =
        type === "user"
          ? { user_message: message, bot_message: null, timestamp }
          : { user_message: null, bot_message: message, timestamp };

      const res = await fetch(SHEETDB_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      return res.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["chatMessages"] });
    },
  });
};
