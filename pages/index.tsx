import React, { useEffect, useState } from 'react';
import { NextPage } from 'next'; // eslint-disable-line
import { useRouter } from 'next/router';
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

const Dashboard: NextPage = () => {
    const [posts, setPosts] = useState<Entry<Post>[] | null>(null);
    const [title, setTitle] = useState<string>(phrases[Math.floor(Math.random() * phrases.length)]);

    const router = useRouter();

    useEffect(() => {
        fetchPosts();

        const interval = setInterval(() => {
            const p = phrases[Math.floor(Math.random() * phrases.length)];
            setTitle(p);
        }, 10000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    async function fetchPosts() {
        try {
            const response = await contentful.getEntries<Post>({
                content_type: 'postagem',
                limit: 5,
            });

            setPosts(response.items);
        } catch (err) {}
    }

    return (
        <>
            <Head>
                <title key="title">Home | RDN Blog</title>
            </Head>

            <Header title={title} />

            <Container>
                <section className="articles-section">
                    <h3>Artigos recentes</h3>

                    <div className="articles">
                        {posts && posts.map((post) => <Article key={post.fields.alias} data={post} />)}
                    </div>
                    <div className="more">
                        <Button hoverColor="#c3b5d3" onClick={() => router.push('/articles')}>
                            Ver mais
                        </Button>
                    </div>
                </section>

                <Footer />
            </Container>
        </>
    );
};

const phrases = ['build, create and share', 'be the change', 'Dream it...', 'Dream bigger.', "Don't limit yourself."];

export default Dashboard;
