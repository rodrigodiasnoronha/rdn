import React from 'react';
import { NextPage } from 'next'; // eslint-disable-line
import { Header, Footer, PostContent, Error, Head } from '../components';
import { Post } from '../types'; // eslint-disable-line
import contentful from '../services/contentful';
import styled from 'styled-components';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Entry } from 'contentful'; // eslint-disable-line

const Container = styled.main`
    height: 100%;
`;

interface Props {
    alias: string;
    post: Entry<Post> | null;
    error: boolean;
    errorMessage: string;
}

// @ts-ignore
const PostComponent: NextPage<Props> = ({ post, error, errorMessage }) => {
    function formatDate(date: Date) {
        return format(new Date(date), "d 'de' MMMM 'de' Y", { locale: ptBR });
    }

    if (error) {
        return (
            <React.Fragment>
                <Head>
                    <title key="title">404 | RND Blog</title>
                </Head>

                <Header />

                <Container>
                    <Error message={errorMessage} />

                    <Footer />
                </Container>
            </React.Fragment>
        );
    }

    return (
        <React.Fragment>
            <Head>
                <title key="title">{post.fields.titulo} | RND Blog</title>

                <meta property="og:type" content="article" />
                <meta key="og:title" property="og:title" content={post.fields.titulo} />
                <meta property="og:url" content={`https://rdn.now.sh/${post.fields.alias}`} />

                <meta key="og:site_name" property="og:site_name" content={`RDN Blog - ${post.fields.titulo}`} />

                <meta key="og:image" property="og:image" content={post.fields.thumb.fields.file.url} />
                <meta key="og:description" property="og:description" content={post.fields.descricao} />

                <meta property="article:published_time" content={String(post.fields.createdAt)} />
                <meta property="article:author" content={post.fields.autor.fields.nome} />
                <meta property="profile:first_name" content={post.fields.autor.fields.nome} />

                <meta name="twitter:card" content="summary" />

                <meta name={`twitter:title`} content={post.fields.titulo} />
                <meta name={`twitter:description`} content={post.fields.descricao} />

                <meta name={`twitter:image`} content={post.fields.thumb.fields.file.url} />

                <meta name="twitter:site" content={post.fields.autor.fields?.twitter || '@roketman09'} />

                <meta name="twitter:creator" content={post.fields.autor.fields?.twitter || '@roketman09'} />
                <meta name="twitter:image:src" content={post.fields.thumb.fields.file.url} />

                <meta
                    property="article:tag"
                    content="Programação, TI, JavaScript, Dicas de Programação, Desenvolvimento de Software, Rodrigo Dias Noronha, RDN Blog, Front End, Node.js, React, React Native"
                />
            </Head>
            <Header
                backgroundImage={post.fields.thumb.fields.file.url}
                title={post.fields.titulo}
                date={formatDate(post.fields.createdAt)}
            />

            <Container>
                <PostContent post={post} />
                <Footer />
            </Container>
        </React.Fragment>
    );
};

// @ts-ignore
PostComponent.getInitialProps = async (context) => {
    let alias = context.query.alias as string;
    let error = false;
    let errorMessage = '';
    let post: Entry<Post> | null = null;

    try {
        const response = await contentful.getEntries<Post>({
            content_type: 'postagem',
            'fields.alias': alias,
            limit: 1,
        });

        if (!response.items.length) {
            error = true;
            errorMessage = 'Nenhuma postagem encontrada';

            return { props: { post, errorMessage, error, alias } };
        }

        post = response.items[0];

        return { post, errorMessage, error, alias };
    } catch (err) {
        errorMessage = 'Houve um erro ao mostrar a postagem';
        error = true;

        return { post, errorMessage, error, alias };
    }
};

export default PostComponent;
