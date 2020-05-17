import React from 'react';
import Head from 'next/head';

const HeadComponent: React.FC = ({ children }) => (
    <Head>
        {/* Chrome bar theme */}
        <meta name="theme-color" content="#222" />

        {/* 
  Google Fonts
*/}

        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />

        <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap"
            rel="stylesheet"
        />

        <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&family=Roboto:wght@100;400;500;700&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&display=swap"
            rel="stylesheet"
        ></link>

        <title key="title">RDN Blog</title>

        {/* Og TAGS */}
        <meta property="og:title" content="RDN Blog - Rodrigo Dias Noronha" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://rdn.netlify.com" />
        <meta property="og:image" content="/og-image.PNG" />

        <meta
            property="og:description"
            content="RDN - Blog de dicas sobre Desenvolvimento de Software"
        />
        <meta property="og:determiner" content="" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta property="og:site_name" content="RDN Blog" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@roketman09" />
        <meta name={`twitter:title`} content="RDN - Blog" />
        <meta name={`twitter:image`} content="/og-image.PNG" />

        {children}
    </Head>
);

export default HeadComponent;
