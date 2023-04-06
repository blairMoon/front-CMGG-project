import * as Sentry from "@sentry/react";
import Home from "./pages/Home/Home";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { withProfiler } from "@sentry/react";

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
        <Home />
        <ReactQueryDevtools initialIsOpen={true} />
      </div>
    </Sentry.ErrorBoundary>
  );
};

export default withProfiler(App);
