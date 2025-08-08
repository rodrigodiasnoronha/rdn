import fs, { readdirSync } from 'fs';
import { resolve, join } from 'path';
import matter from 'gray-matter';

const articlesPath = resolve(process.cwd(), 'public', '_articles');

export const getAllArticles = () => {
    const articles = readdirSync(articlesPath);
    return articles.map((article) => article.substr(0, article.lastIndexOf('.md')));
};

export const getArticleByAlias = (slug: string) => {
    const realSlug = slug.replace(/\.md$/, '');
    const fullPath = join(articlesPath, `${realSlug}.md`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    return matter(fileContents);
};

export const formatArticles = (articleFileList: string | string[]) => {
    let arrayFile = new Array();

    if (Array.isArray(articleFileList)) {
        for (const article of articleFileList) {
            const a = getArticleByAlias(article);

            arrayFile.push(a);
        }

        // Ordenar artigos por data (mais recente primeiro)
        arrayFile.sort((a, b) => {
            const dateA = new Date(a.data.data);
            const dateB = new Date(b.data.data);
            return dateB.getTime() - dateA.getTime();
        });

        return arrayFile;
    } else {
        const a = getArticleByAlias(articleFileList);
        return a;
    }
};
