import { Chat } from "types/Chat";
import { create } from "zustand";

interface ChatStore {
  chats: Chat[];
  addChat: (chat: Chat) => void;
  clearChats: () => void;

  selectedChat: Chat | null;
}

const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  addChat: (chat) =>
    set((state) => ({
      chats: [...state.chats, chat],
    })),
  clearChats: () => set({ chats: [] }),

  selectedChat: null,
}));

export default useChatStore;
