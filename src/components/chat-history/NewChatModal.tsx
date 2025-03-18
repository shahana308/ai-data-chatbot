import React from "react";
import { Modal, Input } from "antd";

interface NewChatModalProps {
  isVisible: boolean;
  onOk: () => void;
  onCancel: () => void;
  chatTitle: string;
  setChatTitle: (title: string) => void;
}

const NewChatModal: React.FC<NewChatModalProps> = ({
  isVisible,
  onOk,
  onCancel,
  chatTitle,
  setChatTitle,
}) => {
  return (
    <Modal
      title="New Chat"
      open={isVisible}
      onOk={onOk}
      onCancel={onCancel}
      okText="Create"
      cancelText="Cancel"
      okButtonProps={{
        className: "!bg-peach-200 !text-black",
      }}
    >
      <Input
        placeholder="Enter chat title"
        value={chatTitle}
        onChange={(e) => setChatTitle(e.target.value)}
      />
    </Modal>
  );
};

export default NewChatModal;
