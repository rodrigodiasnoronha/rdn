import React from 'react';
import { AppProps } from 'next/app';
import GlobalStyles from '../components/GlobalStyles';
/**
 *
 * Global Styles
 *
 */

const Global: React.FC<AppProps> = (props) => {
    const { Component, pageProps } = props;

    return (
        <>
            <GlobalStyles />

            <Component {...pageProps} />
        </>
    );
};

export default Global;
