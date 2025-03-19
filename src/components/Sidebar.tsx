"use client";

import WechatWorkOutlined from "@ant-design/icons/WechatWorkOutlined";
import Header from "./shared/Header";
import { Divider } from "antd";

const Sidebar = () => {
  return (
    <div className="w-1/4 text-white h-screen">
      <div className="flex items-center gap-x-5 sticky top-0 z-10 bg-transparent p-5">
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
    </div>
  );
};

export default Sidebar;
