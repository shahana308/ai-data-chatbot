"use client";
import { Button } from "antd";

interface NewChatButtonProps {
  onClick: () => void;
}

const NewChatButton: React.FC<NewChatButtonProps> = ({ onClick }) => {
  return (
    <div className="sticky bottom-0 z-10 p-5 justify-center backdrop-blur-lg bg-white/10 border-t border-peach-100 hidden lg:flex">
      <Button
        className="!px-10 !bg-peach-200 !text-black !font-semibold"
        onClick={onClick}
      >
        + New Chat
      </Button>
    </div>
  );
};

export default NewChatButton;
