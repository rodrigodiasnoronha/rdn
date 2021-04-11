import React, { Component } from 'react';
import { GetStaticProps } from 'next'; // eslint-disable-line
import { withRouter, NextRouter } from 'next/router';
import { Header, Article, Footer, Head } from '../components';
import styled from 'styled-components';
import { Article as IArticle } from '../types'; // eslint-disable-line
import { formatArticles, getAllArticles } from '../lib/articles';
import RecentArticles from '../components/RecentArticles';

const Container = styled.main`
    height: 100%;
    width: 100%;

    .articles-section {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .articles-section h3 {
        text-align: center;
        font-size: 40px;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-weight: 500;

        margin: 50px 0px;
    }

    .articles {
        max-width: 700px;
        width: 100%;
    }

    .more {
        margin: 15px 0px;
    }

    @media (max-width: 700px) {
        .opacity h2 {
            font-size: 1.8rem;
            padding: 0px 5px;
        }

        .articles-section h3 {
            font-size: 2rem;
            margin: 30px 0px;
        }
    }
`;

interface WithRouterProps {
    router: NextRouter;
}

interface DashboardProps extends WithRouterProps {
    articleList: string;
}

interface DashboardState {
    articleList: IArticle;
}

class Dashboard extends Component<DashboardProps, DashboardState> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title key="title">Home | RDN Blog</title>
                </Head>

                <Header title="Pense, construa e compartilhe" />

                <Container>
                    <RecentArticles articleList={this.props.articleList} />
                    <Footer />
                </Container>
            </React.Fragment>
        );
    }
}

export const getStaticProps: GetStaticProps = async () => {
    const articleList = getAllArticles();

    const t = formatArticles(articleList);

    return {
        props: {
            articleList: JSON.stringify(t),
        },
    };
};

export default withRouter(Dashboard);
