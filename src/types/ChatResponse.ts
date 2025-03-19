export interface ChatResponse {
  id: string;
  title: string;
  user_message?: string | null;
  bot_message?: string | null;
  timestamp?: string;
}
