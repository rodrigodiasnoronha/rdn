import React, { useEffect } from 'react';
import { FiTwitter, FiMail } from 'react-icons/fi';
import { Article,  } from '../../../types';
import { Container } from './styles';
import DisqusComments from '../../DisqusComments';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import Prism from 'prismjs'
import {
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton,
    TwitterIcon,
    TwitterShareButton,
    TumblrIcon,
    TumblrShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    EmailIcon,
    EmailShareButton,
    LinkedinShareButton,
    LinkedinIcon,
} from 'react-share';

interface PostContentProps {
    article: Article;
}

const ArticleContent: React.FC<PostContentProps> = ({ article }) => {
    const url = `https://rdn.now.sh/${article.data.slug}`;


    useEffect(() => {
        if (typeof window !== 'undefined') {
            Prism.highlightAll();
        }    
    }, [])

    function formatDate(date: Date) {
        return format(new Date(date), "d 'de' MMMM 'de' Y", { locale: ptBR });
    }

    return (
        <Container>
            <h4 className="description">{article.data.descricao}</h4>

            <div className="author">
                <div className="pic">
                    <img
                        loading="lazy"
                        src={article.data.autorFoto}
                        alt={article.data.autor}
                        title={article.data.autor}
                    />
                </div>

                <div className="info">
                    <span>{article.data.autor}</span>
                    <time>{formatDate(article.data.data)}</time>
                </div>

                <div className="contact">
                    <a target="__blank" href={`https://twitter.com/${article.data.twitter || ''}`}>
                        <FiTwitter color="#1da1f2" size={25} />
                    </a>

                    <a href={`mailto:${article.data.autorEmail}`}>
                        <FiMail color="#e3cf65" size={25} />
                    </a>
                </div>
            </div>

            <div className="body" dangerouslySetInnerHTML={{ __html: article.content }} /> 
            
            <div className="share-container">
                <div className="share">
                    <FacebookShareButton url={url} quote={article.data.titulo}>
                        <FacebookIcon size={50} />
                    </FacebookShareButton>

                    <WhatsappShareButton title={article.data.titulo} url={url}>
                        <WhatsappIcon size={50} />
                    </WhatsappShareButton>

                    <TwitterShareButton title={article.data.titulo} url={url}>
                        <TwitterIcon size={50} />
                    </TwitterShareButton>

                    <TumblrShareButton url={url} title={article.data.titulo} caption={article.data.descricao}>
                        <TumblrIcon size={50} />
                    </TumblrShareButton>

                    <RedditShareButton url={url} title={article.data.titulo}>
                        <RedditIcon size={50} />
                    </RedditShareButton>

                    <TelegramShareButton url={url} title={article.data.titulo}>
                        <TelegramIcon size={50} />
                    </TelegramShareButton>

                    <EmailShareButton url={url} subject={article.data.titulo} body={article.data.descricao}>
                        <EmailIcon size={50} />
                    </EmailShareButton>

                    <LinkedinShareButton
                        url={url}
                        source={url}
                        title={article.data.titulo}
                        summary={article.data.descricao}
                    >
                        <LinkedinIcon size={50} />
                    </LinkedinShareButton>
                </div>

                <DisqusComments
                    articleId={article.data.slug}
                    articleUrl={`https://rdn.now.sh/${article.data.slug}`}
                    articleTitle={article.data.titulo}
                />
            </div>
        </Container>
    );
};

export default ArticleContent;
