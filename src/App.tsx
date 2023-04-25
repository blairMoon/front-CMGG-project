import * as Sentry from "@sentry/react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { withProfiler } from "@sentry/react";
import { RouterProvider } from "react-router-dom";
import router from "./Router";
interface FallbackProps {
  error: Error;
  eventId?: string;
}

const MyFallbackComponent: React.FC<FallbackProps> = ({ error, eventId }) => {
  return (
    <div>
      <h1>Oops, something went wrong!</h1>
      <p>{error.message}</p>
      <button onClick={() => Sentry.showReportDialog({ eventId })}>
        Report feedback
      </button>
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
