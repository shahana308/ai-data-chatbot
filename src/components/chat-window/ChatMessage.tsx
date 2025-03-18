import ReactMarkdown from "react-markdown";
import { ChatResponse } from "types/ChatResponse";

interface ChatMessageProps {
  msg: ChatResponse;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ msg }) => {
  return (
    <div className="flex flex-col">
      {msg.user_message && (
        <div className="flex justify-end">
          <div className="p-3 rounded-lg shadow bg-peach-100 text-quaternary max-w-[70%]">
            {msg.user_message}
          </div>
        </div>
      )}

      {/* bot Message with Markdown Support */}
      {msg.bot_message && (
        <div className="flex justify-start mt-2">
          <div className="p-3 rounded-lg shadow bg-gray-200 text-quinary max-w-[70%] !text-sm leading-6">
            <ReactMarkdown
              components={{
                code({ children }) {
                  return (
                    <pre className="bg-white text-black p-3 rounded-md overflow-x-auto my-2">
                      <code>{children}</code>
                    </pre>
                  );
                },
                blockquote({ children }) {
                  return (
                    <blockquote className="border-l-4 border-gray-500 pl-3 italic text-gray-600 my-2">
                      {children}
                    </blockquote>
                  );
                },
                strong({ children }) {
                  return <strong className="font-bold my-2">{children}</strong>;
                },
              }}
            >
              {msg.bot_message}
            </ReactMarkdown>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatMessage;
