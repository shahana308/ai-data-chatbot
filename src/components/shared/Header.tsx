import { Typography } from "antd";

const { Title } = Typography;

interface HeaderProps {
  level?: 1 | 2 | 3 | 4 | 5;
  title: string | React.ReactNode;
  className?: string;
  titleClass?: string;
}

const Header: React.FC<HeaderProps> = ({
  level = 4,
  title,
  className = "",
  titleClass = "#000",
}) => {
  return (
    <div className={`sticky top-0 z-10 p-2 bg-white !mb-0 ${className}`}>
      <Title level={level} className={titleClass}>
        {title}
      </Title>
    </div>
  );
};

export default Header;
