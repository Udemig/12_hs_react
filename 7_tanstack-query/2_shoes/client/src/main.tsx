import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { ToastContainer } from "react-toastify";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

// react query için gerekli olan importlar
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// react query client oluşturuyoruz
const queryClient = new QueryClient();

// react query provider oluşturuyoruz
// bütün uygulamamızın içinde kullanılacak
createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <App />
    <ReactQueryDevtools />
    <ToastContainer />
  </QueryClientProvider>
);
