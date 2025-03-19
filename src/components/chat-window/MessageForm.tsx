import React from "react";
import { Form, Input, Button, FormInstance, Spin } from "antd";
import { LoadingOutlined, SendOutlined } from "@ant-design/icons";

interface MessageFormProps {
  onSubmit: (value: { message: string }) => void;
  form: FormInstance<{ message: string }>;
  isLoading: boolean;
}

const { TextArea } = Input;

const MessageForm: React.FC<MessageFormProps> = ({
  onSubmit,
  form,
  isLoading,
}) => {
  return (
    <Form
      form={form}
      onFinish={onSubmit}
      className="w-full border border-gray-300 h-20 rounded-3xl !mt-5"
    >
      <div className="flex items-center gap-2">
        <Form.Item name="message" className="flex-1 !m-0">
          <TextArea
            rows={3}
            placeholder="Enter your query..."
            className="flex-1 p-2 rounded-lg !border-none !bg-transparent !my-1 max-h-18 focus:!shadow-none"
          />
        </Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="!leading-0 mx-3 !rounded-lg"
        >
          {isLoading ? (
            <Spin indicator={<LoadingOutlined spin />} />
          ) : (
            <SendOutlined className="!text-black" />
          )}
        </Button>
      </div>
    </Form>
  );
};

export default MessageForm;
