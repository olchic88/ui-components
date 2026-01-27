import { StrictMode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { ErrorBoundary } from "react-error-boundary";
import "./index.css";
import App from "./App.tsx";

const queryClient = new QueryClient();

function Fallback({ error }) {
  // props = { error: Error("Boom"), resetErrorBoundary: f } - from ErrorBoundary //
  return (
    <div role="alert">
      <p>An error has occurred:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

function AppSetup() {
  return (
    <StrictMode>
      <ErrorBoundary FallbackComponent={Fallback}>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </ErrorBoundary>
    </StrictMode>
  );
}

createRoot(document.getElementById("root")!).render(<AppSetup />);
