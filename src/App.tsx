import * as Sentry from "@sentry/react";
import Home from "./pages/HomePage/HomePage";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { withProfiler } from "@sentry/react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
interface FallbackProps {
  error: Error;
}

const MyFallbackComponent: React.FC<FallbackProps> = ({ error }) => {
  return (
    <div>
      <h1>Oops, something went wrong!</h1>
      <p>{error.message}</p>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Sentry.ErrorBoundary
      fallback={({ error }) => <MyFallbackComponent error={error} />}
    >
      <div className="App">
        <RouterProvider router={router} />
        <ReactQueryDevtools initialIsOpen={true} />
      </div>
    </Sentry.ErrorBoundary>
  );
};

export default withProfiler(App);
