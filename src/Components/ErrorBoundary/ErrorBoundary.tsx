import React, { Component, ErrorInfo, ReactNode } from "react";
import './ErrorBoundary.css'
import Button from "@mui/material/Button";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(_: Error): State {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return <div className='errorBoundary__container'>
                <h1>Oops.. there was an error</h1>;
                <Button
                    variant={'contained'}
                    color='error'
                    onClick={() => window.location.reload()}
                >
                    RETRY
                </Button>
            </div>
        }

        return this.props.children;
    }
}
