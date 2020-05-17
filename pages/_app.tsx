import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';
/**
 *
 * Global Styles
 *
 */
import Head from '../components/Head';

const Global: React.FC<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return (
        <>
            <Head />
            <GlobalStyles />

            <Component {...pageProps} />
        </>
    );
};

export default Global;
