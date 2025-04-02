import { ChatResponse } from "./ChatResponse";

export interface Chat {
  id: string;
  title: string;
  messages: ChatResponse[];
  isFavorite?: boolean;
  isSaved?: boolean;
}
