"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App, ConfigProvider } from "antd";
import theme from "utils/theme";

const Providers = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        refetchOnMount: false,
        refetchOnWindowFocus: false,
        staleTime: 1000 * 10,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ConfigProvider theme={theme}>
        <App>{children}</App>
      </ConfigProvider>
    </QueryClientProvider>
  );
};

export default Providers;
