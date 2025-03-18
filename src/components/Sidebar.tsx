"use client";

import WechatWorkOutlined from "@ant-design/icons/WechatWorkOutlined";
import Header from "./shared/Header";

const Sidebar = () => {
  return (
    <div className="w-1/4 text-white h-screen">
      <div className="flex items-center gap-x-5 sticky top-0 z-10 bg-transparent p-7 border-b border-gray-700">
        <Header level={2} />
        <WechatWorkOutlined className="text-3xl !text-peach-200" />
      </div>
    </div>
  );
};

export default Sidebar;
