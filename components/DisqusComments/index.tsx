import React, { useState, useEffect } from 'react';
import { DiscussionEmbed } from 'disqus-react';

interface Props {
    articleUrl: string;
    articleId: string;
    articleTitle: string;
}

const DisqusCommentsComponent: React.FC<Props> = ({ articleId, articleTitle, articleUrl }) => {
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(false);
    }, []);

    if (loading) {
        return <div />;
    } else {
        return (
            <DiscussionEmbed
                shortname="rdn-blog"
                config={{
                    url: articleUrl,
                    identifier: articleId,
                    title: articleTitle,
                }}
            />
        );
    }
};

export default DisqusCommentsComponent;
