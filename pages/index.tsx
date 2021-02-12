import React, { Component } from 'react';
import { NextPage } from 'next'; // eslint-disable-line
import { withRouter, NextRouter } from 'next/router';
import contentful from '../services/contentful';
import { Header, Article, Footer, Button, Head } from '../components';
import styled from 'styled-components';
import { Entry } from 'contentful'; // eslint-disable-line
import { Post } from '../types'; // eslint-disable-line

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

interface DashboardProps extends WithRouterProps {}

interface DashboardState {
    posts: Entry<Post>[];
}

class Dashboard extends Component<DashboardProps, DashboardState> {
    constructor(props) {
        super(props);

        this.fetchPosts = this.fetchPosts.bind(this);

        this.state = {
            posts: [],
        };
    }

    componentDidMount() {
        this.fetchPosts();
    }

    async fetchPosts() {
        try {
            const response = await contentful.getEntries<Post>({
                content_type: 'postagem',
                limit: 5,
            });

            this.setState({ posts: response.items });
        } catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title key="title">Home | RDN Blog</title>
                </Head>

                <Header title="Build, Create and Share" />

                <Container>
                    <section className="articles-section">
                        <h3>Artigos recentes</h3>

                        <div className="articles">
                            {this.state.posts &&
                                this.state.posts.map((post) => <Article key={post.fields.alias} data={post} />)}
                        </div>
                        <div className="more">
                            <Button hoverColor="#c3b5d3" onClick={() => this.props.router.push('/articles')}>
                                Ver mais
                            </Button>
                        </div>
                    </section>

                    <Footer />
                </Container>
            </React.Fragment>
        );
    }
}

export default withRouter(Dashboard);
