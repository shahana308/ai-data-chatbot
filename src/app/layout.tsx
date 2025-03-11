import QueryProvider from "../components/QueryProvider";
import "../styles/global.css";

export const metadata = {
  title: "Data-Driven AI",
  description: "Data-Driven AI",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
};

export default RootLayout;
