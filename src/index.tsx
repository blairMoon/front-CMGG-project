import "../node_modules/scss-reset/src/scss/_reset.scss";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import * as Sentry from "@sentry/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ChakraProvider } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";
import { worker } from "./services/mocks/browser";

Sentry.init({
  dsn: process.env.REACT_APP_DSN,
  environment: "development",
  integrations: [new Sentry.BrowserTracing(), new Sentry.Replay()],
  tracesSampleRate: 1.0,
});

try {
  if (process.env.NODE_ENV === "development") {
    worker.start();
  }

  // const myRecoilRootProps: RecoilRootProps = {};
  const client = new QueryClient();

  const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
  );

  root.render(
    <RecoilRoot>
      <QueryClientProvider client={client}>
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
} catch (error) {
  console.log(error);
  Sentry.captureException(error);
}
