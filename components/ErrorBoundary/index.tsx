import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.main`
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-weight: 500;
        text-align: center;
        color: #e02;
    }
`;

interface ErrorBoundaryState {
    error: boolean;
}

class ErrorBoundary extends Component<{}, ErrorBoundaryState> {
    constructor(props) {
        super(props);

        this.state = {
            error: false,
        };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ error: true });
    }

    render() {
        if (this.state.error) {
            return (
                <Container>
                    <h2>Ocorreu um erro. Atualize a página e tente novamente</h2>
                </Container>
            );
        }

        return <React.Fragment>{this.props.children}</React.Fragment>;
    }
}

export default ErrorBoundary;
