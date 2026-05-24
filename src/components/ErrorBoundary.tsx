import { Component, type ErrorInfo, type ReactNode } from "react";
import { reportClientError } from "@/lib/errorReporter";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    reportClientError({
      source: "react-error-boundary",
      error,
      meta: { componentStack: info.componentStack?.slice(0, 2000) },
    });
  }

  render() {
    if (this.state.hasError) {
      return (
        this.props.fallback ?? (
          <div role="alert" className="min-h-[40vh] flex items-center justify-center p-6 text-center">
            <div>
              <h1 className="text-2xl font-semibold mb-2">Something went wrong</h1>
              <p className="text-muted-foreground mb-4">
                We've been notified and are looking into it. Please refresh to try again.
              </p>
              <button
                onClick={() => window.location.reload()}
                className="px-4 py-2 rounded-md bg-primary text-primary-foreground"
              >
                Reload page
              </button>
            </div>
          </div>
        )
      );
    }
    return this.props.children;
  }
}
