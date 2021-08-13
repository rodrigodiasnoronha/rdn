import React from 'react';
import { GetStaticProps, NextPage } from 'next'; // eslint-disable-line
import { Article as IArticle } from '../types'; // eslint-disable-line
import { Header, Article, Footer, Head } from '../components';
import styled from 'styled-components';
import { formatArticles, getAllArticles } from '../lib/articles';

const Container = styled.article`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    max-width: 700px;
    width: 100%;
    margin: 35px auto;

    h2 {
        margin-bottom: 25px;
        font-size: 44px;
        font-weight: 500;
        text-align: center;
    }

    .more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0px;
    }

    @media (max-width: 700px) {
        padding: 0px 10px;
    }
`;

interface ArticlesComponentProps {
    articleList: string;
}

const ArticlesComponent: NextPage<ArticlesComponentProps> = (props) => {
    const articleList = JSON.parse(props.articleList) as IArticle[];

    return (
        <React.Fragment>
            <Head>
                <title key="title">Artigos | RDN Blog</title>
            </Head>

            <Header title="Compartilhe conhecimento" />

            <Container>
                {/* <SearchArticle updatePosts={setPosts} /> */}

                <h2>Últimas postagens</h2>

                {articleList.map((article) => (
                    <Article data={article} key={article.data.slug} />
                ))}
            </Container>
            <Footer />
        </React.Fragment>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const articleList = getAllArticles();

    const t = formatArticles(articleList);

    return {
        props: { articleList: JSON.stringify(t) },
    };
};

export default ArticlesComponent;
