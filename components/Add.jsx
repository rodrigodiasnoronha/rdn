import React, { useEffect } from 'react';

const Add = () => {
    useEffect(() => {
        if (window) (window.adsbygoogle = window.adsbygoogle || []).push({});
    }, []);

    return (
        <>
            <script
                async
                src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
            ></script>
            <ins
                className="adsbygoogle"
                style={{ display: 'block', width: '100%' }}
                data-ad-client="ca-pub-7185437016073244"
                data-ad-slot="6543858590"
                data-ad-format="auto"
                data-full-width-responsive="true"
            ></ins>
        </>
    );
};

export default Add;
