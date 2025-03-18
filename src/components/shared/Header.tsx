import { Typography } from "antd";

const { Title } = Typography;

interface HeaderProps {
  level?: 1 | 2 | 3 | 4 | 5;
  className?: string;
  titleClass?: string;
}

const Header: React.FC<HeaderProps> = ({
  level = 4,
  className = "",
  titleClass = "#000",
}) => {
  return (
    <div
      className={`sticky top-0 z-10 p-2 bg-white border-b border-gray-200 ${className}`}
    >
      <Title level={level} className={titleClass}>
        Chat History
      </Title>
    </div>
  );
};

export default Header;
