import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';
import NextNprogress from 'nextjs-progressbar';

const Global: React.FC<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return (
        <React.Fragment>
            <GlobalStyles />
            <NextNprogress options={{ easing: 'ease', speed: 500, showSpinner: false }} />
            <Component {...pageProps} />
        </React.Fragment>
    );
};

export default Global;
