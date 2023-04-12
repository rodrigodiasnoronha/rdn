import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Link from 'next/link';
import React from 'react';
import { Article as IArticle } from '../../types';

interface ArticleProps {
    data: IArticle;
}

const Article: React.FC<ArticleProps> = ({ data }) => {
    function formatDate(date: Date) {
        return format(new Date(date), "d 'de' MMM 'de' Y", { locale: ptBR });
    }

    return (
        <div className='flex flex-row justify-between items-center py-3 border-b'>
            <Link className="text-lg text-gray-800 hover:text-call" href={`/articles/${data.data.slug}`}>
                {data.data.titulo}
            </Link>

            <div className="text-sm">
                <time>{formatDate(data.data.data)}</time>
            </div>
        </div>
    );
};

export default Article;
