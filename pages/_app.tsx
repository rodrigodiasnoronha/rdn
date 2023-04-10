import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';
import ErrorBoundary from '../components/ErrorBoundary';
import NextNprogress from 'nextjs-progressbar';
import 'prismjs';
import "prismjs/components/prism-javascript"
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-jsx.min.js';
import 'prismjs/components/prism-tsx.min.js';
import 'prismjs/components/prism-typescript.min.js';
import 'prismjs/components/prism-bash.min.js';
import 'prismjs/components/prism-json.min.js';
import 'prismjs/components/prism-yaml.min.js';
import "prismjs/themes/prism-tomorrow.css";
import '../styles/prism-dracula.css';

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
