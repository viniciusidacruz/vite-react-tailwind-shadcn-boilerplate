import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/shared/lib";

import { AppRoutes } from "./AppRoutes";

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRoutes />
    </QueryClientProvider>
  );
}
