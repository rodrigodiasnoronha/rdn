import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet';

const HeadComponent: React.FC<{ children?: ReactNode }>  = ({ children }) => (
    <Helmet>
        {/* Chrome bar theme */}
        <meta name="theme-color" content="#222" />

        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link rel="manifest" href="/manifest.json" />

        {/*  Google Fonts */}
        <link rel="shortcut icon" href="/favicon.png" type="image/x-icon" />
        <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&display=swap" rel="stylesheet" />
        <link
            href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;700&family=Roboto:wght@100;400;500;700&display=swap"
            rel="stylesheet"
        />
        <link
            href="https://fonts.googleapis.com/css2?family=Balsamiq+Sans:wght@400;700&display=swap"
            rel="stylesheet"
        ></link>
        <link
            href="https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,600;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap"
            rel="stylesheet"
        ></link>
        <link
            href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
            rel="stylesheet"
        ></link>

        <title key="title">RDN Blog - Rodrigo Dias Noronha</title>

        {/*  Reference to the manifest file in the public path */}
        <link rel="manifest" href="/manifest.json" />

        {/*  Reference to the manifest file in the public path */}
        <link rel="manifest" href="/manifest.json" />
        {/* Og TAGS */}
        <meta key="og:title" property="og:title" content="RDN - Portfólio e Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rdn.now.sh" />
        <meta key="og:image" property="og:image" content="http://vmorneau.me/content/images/2016/07/java-script.jpg" />
        <meta property="og:author" content="Rodrigo Dias Noronha" />
        <meta
            key="og:description"
            property="og:description"
            content="RDN - Blog de dicas sobre Desenvolvimento de Software, criado por Rodrigo Dias Noronha"
        />
        <meta property="og:determiner" content="https://rdn.now.sh" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:locale:alternate" content="es_ES" />
        <meta key="og:site_name" property="og:site_name" content="RDN - Dicas sobre Desenvolvimento de Software" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@xxxkckkxkxxk" />
        <meta
            name={`twitter:title`}
            content="RDN - Dicas sobre Desenvolvimento de Software, criado por Rodrigo Dias Noronha"
        />
        <meta name={`twitter:image`} content="http://vmorneau.me/content/images/2016/07/java-script.jpg" />

        {children}
    </Helmet>
);

export default HeadComponent;
