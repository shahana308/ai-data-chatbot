import "../styles/global.css";
import Providers from "./providers";

export const metadata = {
  title: "Data-Driven AI",
  description: "Data-Driven AI",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
