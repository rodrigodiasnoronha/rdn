import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next'; // eslint-disable-line
import React from 'react';
import styled from 'styled-components';
import { Footer, Head, Header, PostContent } from '@/components';
import { getAllArticles, getArticleByAlias } from '@/lib/articles';
import markdownToHtml from '@/lib/markdown';
import { Article } from '@/types'; // eslint-disable-line

const Container = styled.main`
    height: 100%;
`;

interface Props {
    article: string;
}

// @ts-ignore
const PostComponent: NextPage<Props> = (props) => {
    const article = JSON.parse(props.article) as Article;

    function formatDate(date: Date) {
        return format(new Date(date), "d 'de' MMMM 'de' Y 'às' HH:mm", { locale: ptBR });
    }

    return (
        <React.Fragment>
            <Head>
                <title key="title">{article.data.titulo} | Rodrigo Dias Noronha</title>

                <meta property="og:type" content="article" />
                <meta key="og:title" property="og:title" content={article.data.titulo} />
                <meta property="og:url" content={`https://rdn.now.sh/${article.data.slug}`} />

                <meta key="og:site_name" property="og:site_name" content={`RDN Blog - ${article.data.titulo}`} />

                {/* <meta key="og:image" property="og:image" content={post.fields.thumb.fields.file.url} /> */}
                <meta key="og:description" property="og:description" content={article.data.descricao} />

                <meta property="article:published_time" content={String(article.data.data)} />
                <meta property="article:author" content={article.data.autor} />
                <meta property="profile:first_name" content={article.data.autor} />

                <meta name="twitter:card" content="summary" />

                <meta name={`twitter:title`} content={article.data.titulo} />
                <meta name={`twitter:description`} content={article.data.descricao} />

                {/* <meta name={`twitter:image`} content={post.fields.thumb.fields.file.url} /> */}

                <meta name="twitter:site" content={article.data.twitter || '@xxxkckkxkxxk'} />

                <meta name="twitter:creator" content={article.data.twitter || '@xxxkckkxkxxk'} />
                {/* <meta name="twitter:image:src" content={post.fields.thumb.fields.file.url} /> */}

                <meta
                    property="article:tag"
                    content="Programação, TI, JavaScript, Dicas de Programação, Desenvolvimento de Software, Rodrigo Dias Noronha, RDN Blog, Front End, Node.js, React, React Native"
                />
            </Head>
            <Header
                // backgroundImage={post.fields.thumb.fields.file.url}
                title={article.data.titulo}
                date={formatDate(article.data.data)}
            />

            <Container>
                <PostContent article={article} />
                <Footer />
            </Container>
        </React.Fragment>
    );
};

export const getStaticPaths: GetStaticPaths = async () => {
    const articles = getAllArticles();
    const paths = articles.map((a) => ({ params: { alias: a } }));

    return {
        paths: paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const article = getArticleByAlias(String(params.alias || ''));

    const content = await markdownToHtml(article.content);
    article.content = content;

    return {
        props: { article: JSON.stringify(article) },
    };
};

export default PostComponent;
