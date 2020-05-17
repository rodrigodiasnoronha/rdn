import React, { useEffect } from 'react';

const Ads = () => {
    useEffect(() => {
        if (window) {
            window.onload = function () {
                (window.adsbygoogle = window.adsbygoogle || []).push({});
            };
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: 'block', width: '100%', minHeight: 100 }}
            data-ad-client="ca-pub-7185437016073244"
            data-ad-slot="6543858590"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default Ads;
