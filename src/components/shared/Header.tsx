import { Typography } from "antd";

const { Title } = Typography;

interface HeaderProps {
  level?: 1 | 2 | 3 | 4 | 5;
}

const Header: React.FC<HeaderProps> = ({ level = 4 }) => {
  return (
    <div className="sticky top-0 z-10 p-2 bg-white border-b border-gray-200">
      <Title level={level}>Chat History</Title>
    </div>
  );
};

export default Header;
