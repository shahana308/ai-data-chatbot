import { Chat } from "types/Chat";
import { create } from "zustand";

interface ChatStore {
  chats: Chat[];
  addChat: (chat: Chat) => void;
  clearChats: () => void;

  selectedChat: Chat | null;

  selectedTab: string;
  setSelectedTab: (tab: string) => void;
}

const useChatStore = create<ChatStore>((set) => ({
  chats: [],
  addChat: (chat) =>
    set((state) => ({
      chats: [...state.chats, chat],
    })),
  clearChats: () => set({ chats: [] }),

  selectedChat: null,

  selectedTab: "1",
  setSelectedTab: (tab) => set({ selectedTab: tab }),
}));

export default useChatStore;
