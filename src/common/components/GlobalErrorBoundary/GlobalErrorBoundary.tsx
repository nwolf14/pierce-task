import React from 'react';
import { GlobalError } from './GlobalError/GlobalError';

interface ErrorBoundaryProps {
    hasError?: boolean;
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    errorType?: string;
}

export class GlobalErrorBoundary extends React.PureComponent<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Send error.message to the Sentry or some other monitoring tools
        return {
            hasError: true,
            errorType: error.message,
        };
    }

    handleTryAgain = (): void => {
        this.setState({
            hasError: false,
        });
    };

    render(): React.ReactNode {
        const { hasError } = this.state;

        if (hasError) {
            return (
                <GlobalError onTryAgainClick={this.handleTryAgain}/>
            );
        }

        return this.props.children;
    }
}
