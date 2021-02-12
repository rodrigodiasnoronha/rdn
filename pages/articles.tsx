import React, { useState } from 'react';
import { NextPage } from 'next'; // eslint-disable-line
import { Post } from '../types'; // eslint-disable-line
import contentful from '../services/contentful';
import { Entry } from 'contentful'; // eslint-disable-line
import { Header, Error, Article, Button, SearchArticle, Footer, Head } from '../components';
import styled from 'styled-components';

const Container = styled.article`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    max-width: 700px;
    width: 100%;
    margin: 35px auto;

    h2 {
        margin-bottom: 5px;
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
    posts: Entry<Post>[] | null;
    error: boolean;
    errorMessage: string;
    total: number;
}

const ArticlesComponent: NextPage<ArticlesComponentProps> = (props) => {
    const { error, errorMessage, total } = props;

    const [posts, setPosts] = useState<Entry<Post>[] | null>(props.posts);
    const [loading, setLoading] = useState<boolean>(false);

    async function getMorePosts() {
        try {
            if (posts.length >= total) {
                return;
            }

            setLoading(true);

            const skip = posts.length;
            const response = await contentful.getEntries<Post>({ content_type: 'postagem', limit: 5, skip });

            setPosts([...posts, ...response.items]);
            setLoading(false);
        } catch (err) {
            setLoading(false);
        }
    }

    if (error) {
        return (
            <React.Fragment>
                <Head>
                    <title key="title">404 | RDN Blog</title>
                </Head>

                <Header title="Share your knowledge" />

                <Container>
                    <Error message={errorMessage} />
                </Container>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Head>
                <title key="title">Artigos | RDN Blog</title>
            </Head>

            <Header title="Share your knowledge" />

            <Container>
                <SearchArticle updatePosts={setPosts} />

                <h2>Últimas postagens</h2>

                {posts.map((post) => (
                    <Article data={post} key={post.fields.alias} />
                ))}

                <div className="more">
                    <Button disabled={loading} hoverColor="#c3b5d3" onClick={getMorePosts}>
                        {total <= posts.length ? 'Não há mais artigos' : loading ? 'Carregando' : 'Mostrar mais'}
                    </Button>
                </div>
            </Container>
            <Footer />
        </React.Fragment>
    );
};

ArticlesComponent.getInitialProps = async () => {
    let error = false;
    let errorMessage = '';
    let posts: Entry<Post>[] | null = null;
    let total = 0;

    try {
        const response = await contentful.getEntries<Post>({
            content_type: 'postagem',
            limit: 5,
        });

        if (!response.items.length) {
            error = true;
            errorMessage = 'Nenhuma postagem encontrada';

            return { posts, errorMessage, error, total };
        }

        return {
            errorMessage,
            error,
            posts: response.items,
            total: response.total,
        };
    } catch (err) {
        errorMessage = 'Houve um erro ao mostrar a postagem';
        error = true;

        return { posts, errorMessage, error, total };
    }
};

export default ArticlesComponent;
