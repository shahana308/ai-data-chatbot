import { Chat } from "types/Chat";
import { create } from "zustand";

interface ChatStore {
  chats: Chat[];
  addChat: (chat: Chat) => void;
  clearChats: () => void;
}

const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  addChat: (chat) =>
    set((state) => ({
      chats: [...state.chats, chat],
    })),
  clearChats: () => set({ chats: [] }),
}));

export default useChatStore;
