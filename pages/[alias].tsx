import React from 'react';
import { NextPage } from 'next'; // eslint-disable-line
import { Header, Footer, PostContent, Error, Head } from '../components';
import { Post } from '../types'; // eslint-disable-line
import contentful from '../services/contentful';
import styled from 'styled-components';
import { Entry } from 'contentful'; // eslint-disable-line

interface Props {
    alias: string;
    post: Entry<Post> | null;
    error: boolean;
    errorMessage: string;
}

const PostComponent: NextPage<Props> = ({ post, error, errorMessage }) => {
    if (error) {
        return (
            <>
                <Head>
                    <title key="title">404 | RND Blog</title>
                </Head>

                <Header />

                <Container>
                    <Error message={errorMessage} />

                    <Footer />
                </Container>
            </>
        );
    } else {
        return (
            <>
                <Head>
                    <title key="title">{post.fields.title} | RND Blog</title>

                    <meta property="og:type" content="article" />
                    <meta
                        property="article:published_time"
                        content={post.fields.createdAt}
                    />
                    <meta
                        property="article:author"
                        content={post.fields.author.fields.name}
                    />
                    <meta
                        property="profile:first_name"
                        content={post.fields.author.fields.name}
                    />

                    <meta name={`twitter:title`} content={post.fields.title} />
                    <meta
                        name={`twitter:description`}
                        content={post.fields.description}
                    />

                    <meta
                        name={`twitter:image`}
                        content={post.fields.thumbnail.fields.file.url}
                    />

                    <meta
                        name="twitter:site"
                        content={
                            post.fields.author.fields?.twitter || '@roketman09'
                        }
                    />

                    <meta
                        property="article:tag"
                        content="Programação, TI, JavaScript, Dicas de Programação, Desenvolvimento de Software, Rodrigo Dias Noronha, RDN Blog, Front End, Node.js, React, React Native"
                    />
                </Head>
                <Header
                    backgroundImage={post.fields.thumbnail.fields.file.url}
                    title={post.fields.title}
                    date={post.fields.createdAt}
                />

                <Container>
                    <PostContent post={post} />

                    <Footer />
                </Container>
            </>
        );
    }
};

PostComponent.getInitialProps = async (context) => {
    let alias = context.query.alias as string;
    let error = false;
    let errorMessage = '';
    let post: Entry<Post> | null = null;

    try {
        const response = await contentful.getEntries<Post>({
            content_type: 'post',
            'fields.alias': alias,
            limit: 1,
        });

        if (!response.items.length) {
            error = true;
            errorMessage = 'Nenhuma postagem encontrada';

            return { post, errorMessage, error, alias };
        }

        post = response.items[0];

        return { post, errorMessage, error, alias };
    } catch (err) {
        errorMessage = 'Houve um erro ao mostrar a postagem';
        error = true;

        return { post, errorMessage, error, alias };
    }
};

const Container = styled.main`
    height: 100%;
`;

export default PostComponent;
