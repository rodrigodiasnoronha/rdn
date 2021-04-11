import React, { Component } from 'react';
import { Article as ArticleInterface } from '../../types';
import Article from '../Article';

interface RecentArticlesProps {
    articleList: string;
}

class RecentArticles extends Component<RecentArticlesProps, {}> {
    private articleList = JSON.parse(this.props.articleList) as ArticleInterface[];

    render() {
        let articeListOrdered = this.articleList.sort((a, b) => (a.data.data <= b.data.data ? 1 : -1));

        return (
            <section className="articles-section">
                <h3>Recentes</h3>

                <div className="articles">
                    {articeListOrdered &&
                        articeListOrdered.map((article) => <Article key={article.data.slug} data={article} />)}
                </div>
            </section>
        );
    }
}

export default RecentArticles;
