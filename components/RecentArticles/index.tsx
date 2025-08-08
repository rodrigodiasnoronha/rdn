import React, { Component } from 'react';
import { Article as ArticleInterface } from '@/types';
import Article from '@/components/Article';

interface RecentArticlesProps {
    articleList: string;
}

class RecentArticles extends Component<RecentArticlesProps, {}> {
    private articleList = JSON.parse(this.props.articleList) as ArticleInterface[];

    render() {
        let articeListOrdered = this.articleList.sort((a, b) => {
            const dateA = new Date(a.data.data);
            const dateB = new Date(b.data.data);
            return dateB.getTime() - dateA.getTime();
        });

        return (
            <section className="flex flex-col items-center p-4">
                <h3 className="text-4xl font-medium my-4 font-roboto">Recentes</h3>

                <div>
                    {articeListOrdered &&
                        articeListOrdered.map((article) => <Article key={article.data.slug} data={article} />)}
                </div>
            </section>
        );
    }
}

export default RecentArticles;
