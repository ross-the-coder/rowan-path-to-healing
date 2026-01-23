import { Component, type ReactNode } from "react";
import { Link } from "react-router-dom";

type ErrorBoundaryProps = {
  children: ReactNode;
};

type ErrorBoundaryState = {
  hasError: boolean;
  error?: Error;
  errorInfo?: React.ErrorInfo;
  retryCount: number;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false, retryCount: 0 };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App error boundary caught an error:", error, errorInfo);

    // Check if this is a chunk loading error
    const isChunkError = error.message.includes('Failed to fetch dynamically imported module') ||
                        error.message.includes('Importing a module script failed') ||
                        error.message.includes('error loading dynamically imported module') ||
                        error.name === 'ChunkLoadError';

    if (isChunkError && this.state.retryCount < 2) {
      console.log(`Chunk load error detected. Retry attempt ${this.state.retryCount + 1}/2`);

      // Increment retry count and attempt reload after brief delay
      this.setState({ retryCount: this.state.retryCount + 1 });

      setTimeout(() => {
        window.location.reload();
      }, 1000);

      return;
    }

    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-6">
          <div className="max-w-lg text-center space-y-4">
            <h1 className="text-3xl font-bold text-foreground">Something went wrong</h1>
            <p className="text-muted-foreground">
              Please try again or return to the home page. If this keeps happening, we are working on a fix.
            </p>
            {this.state.error && (
              <div className="rounded-md bg-white/80 p-3 text-left text-xs text-foreground/80">
                <div className="font-semibold">Error</div>
                <div className="mt-1">{this.state.error.message || String(this.state.error)}</div>
                {this.state.errorInfo?.componentStack && (
                  <pre className="mt-2 whitespace-pre-wrap text-[11px] leading-relaxed text-muted-foreground">
                    {this.state.errorInfo.componentStack}
                  </pre>
                )}
              </div>
            )}
            <Link to="/" className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-primary-foreground">
              Go to Home
            </Link>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
