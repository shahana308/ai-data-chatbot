"use client";

import MessageOutlined from "@ant-design/icons/MessageOutlined";
import HeartOutlined from "@ant-design/icons/HeartOutlined";
import Header from "../shared/Header";
import { WechatWorkOutlined } from "@ant-design/icons";
import { Divider, Layout, Menu } from "antd";
import { SaveOutlined } from "@ant-design/icons";
import useChatStore from "stores/useChatStore";

const { Sider } = Layout;

const items2 = [
  {
    key: "1",
    icon: <MessageOutlined />,
    label: "Chat Generator",
  },
  {
    key: "2",
    icon: <HeartOutlined />,
    label: "Favorites",
  },
  {
    key: "3",
    icon: <SaveOutlined />,
    label: "Save",
  },
];

const Sidebar = () => {
  const { selectedTab, setSelectedTab } = useChatStore();

  const handleMenuClick = ({ key }: { key: string }) => {
    setSelectedTab(key);
  };

  return (
    <div className="w-full md:w-1/3 lg:w-1/4 bg-secondary p-4">
      <div className="flex items-center gap-x-5 sticky top-0 z-10 bg-transparent p-5 ">
        <Header
          title={
            <div className="flex items-center gap-x-2">
              <span className="text-3xl font-semibold">Chat Bot</span>
              <WechatWorkOutlined className="text-3xl !text-peach-200" />
            </div>
          }
          level={2}
          className="!bg-transparent border-none"
          titleClass="!text-white !mb-0"
        />
      </div>
      <Divider className="!my-0 !bg-gray-700" />

      <Sider className="!w-full !min-w-0 !max-w-full px-6 py-5">
        <Menu
          mode="inline"
          selectedKeys={[selectedTab]}
          items={items2}
          theme="dark"
          className="!w-full font-medium"
          onClick={handleMenuClick}
        />
      </Sider>
    </div>
  );
};

export default Sidebar;
