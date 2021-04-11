import React from 'react';
import Link from 'next/link';
import { Article as IArticle } from '../../types';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Container } from './styles';

interface ArticleProps {
    data: IArticle;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
    function formatDate(date: Date) {
        return format(new Date(date), "d 'de' MMM 'de' Y", { locale: ptBR });
    }

    return (
        <Container>
            <div className="title">
                <Link href={`/articles/${data.data.slug}`}>
                    <a>{data.data.titulo}</a>
                </Link>
            </div>

            <div className="date">
                <time>{formatDate(data.data.data)}</time>
            </div>
        </Container>
    );
};

export default Article;
