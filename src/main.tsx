import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import "./style.scss";
import App from "./App.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {Provider} from "@/components/ui/provider";
import {Toaster} from "./components/ui/toaster.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider>
        <Toaster />
        <App />
      </Provider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>
);
