import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';
import ErrorBoundary from '../components/ErrorBoundary';
import NextNprogress from 'nextjs-progressbar';
import '../styles/prism-dracula.css';
import 'prismjs'
import 'prismjs/components/prism-jsx.min.js'

const Global: React.FC<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return (
        <ErrorBoundary>
            <GlobalStyles />
            <NextNprogress options={{ easing: 'ease', speed: 500, showSpinner: false }} />
            <Component {...pageProps} />
        </ErrorBoundary>
    );
};

export default Global;
