"use client";

import store, { persistor } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import NotificationProvider from "./NotificationProvider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      retry: false,
      staleTime: 0,
    },
  },
});

const Providers = ({ children }: React.PropsWithChildren) => {
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <SessionProvider>{children}</SessionProvider>
          <NotificationProvider />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  );
};

export default Providers;
