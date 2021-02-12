import React from 'react';
import Link from 'next/link';
import { Post } from '../../types';
import { Entry } from 'contentful';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Container } from './styles';

interface ArticleProps {
    data: Entry<Post>;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
    function formatDate(date: Date) {
        return format(new Date(date), "d 'de' MMM 'de' Y", { locale: ptBR });
    }

    return (
        <Container>
            <div className="title">
                <Link href={`/${data.fields.alias}`}>
                    <a>{data.fields.titulo}</a>
                </Link>
            </div>

            <div className="date">
                <time>{formatDate(data.fields.createdAt)}</time>
            </div>
        </Container>
    );
};

export default Article;
