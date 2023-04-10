import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../node_modules/scss-reset/src/scss/_reset.scss";
import { ChakraProvider } from "@chakra-ui/react";

Sentry.init({
  dsn: "https://97f36cbf38094c0381c09337fd4bca6c@o4504964748345344.ingest.sentry.io/4504967641759744",
  environment: "development",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  tracesSampleRate: 1.0,
});

const client = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
