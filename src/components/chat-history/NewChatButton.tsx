"use client";
import { Button } from "antd";

interface NewChatButtonProps {
  onClick: () => void;
}

const NewChatButton: React.FC<NewChatButtonProps> = ({ onClick }) => {
  return (
    <div className="sticky bottom-0 z-10 p-2 bg-white flex justify-center">
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
