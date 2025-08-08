import { GetStaticProps } from 'next'; // eslint-disable-line
import { NextRouter, withRouter } from 'next/router';
import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer, Head, Header } from '@/components';
import RecentArticles from '@/components/RecentArticles';
import { formatArticles, getAllArticles } from '@/lib/articles';
import { Article as IArticle } from '@/types'; // eslint-disable-line

const Container = styled.main`
    width: 100%;

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
                    <title key="title">Home | Rodrigo Dias Noronha</title>
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
