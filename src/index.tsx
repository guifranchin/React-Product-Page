import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient({defaultOptions: {queries:{refetchOnWindowFocus: false}}});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </QueryClientProvider>
);

