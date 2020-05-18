import React from 'react';
import Head from 'next/head';

const HeadComponent: React.FC = ({ children }) => (
    <Head>
        {/* Chrome bar theme */}
        <meta name="theme-color" content="#222" />

        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />

        {/*  Google Fonts */}
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
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

        {/*  Reference to the manifest file in the public path */}
        <link rel="manifest" href="/manifest.json" />

        <title key="title">RDN Blog</title>
        {/*  Reference to the manifest file in the public path */}
        <link rel="manifest" href="/manifest.json" />
        {/* Og TAGS */}
        <meta
            key="og:title"
            property="og:title"
            content="RDN Blog - Tecnologias e muito mais"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rdn.now.sh" />
        <meta key="og:image" property="og:image" content="/og-image.PNG" />
        <meta property="og:author" content="Rodrigo Dias Noronha" />
        <meta
            key="og:description"
            property="og:description"
            content="RDN - Blog de dicas sobre Desenvolvimento de Software, criado por Rodrigo Dias Noronha"
        />
        <meta property="og:determiner" content="https://rdn.now.sh" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta
            key="og:site_name"
            property="og:site_name"
            content="RDN Blog - Blog sobre tecnologias e muito mais"
        />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@roketman09" />
        <meta
            name={`twitter:title`}
            content="RDN - Blog de Tecnologias e muito mais"
        />
        <meta name={`twitter:image`} content="/og-image.PNG" />

        <script
            data-ad-client="ca-pub-7185437016073244"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>

        {children}
    </Head>
);

export default HeadComponent;
