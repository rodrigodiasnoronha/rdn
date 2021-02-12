import React from 'react';
import { FiTwitter, FiMail } from 'react-icons/fi';
import { Post } from '../../types';
import { Entry } from 'contentful';
import { Container } from './styles';
import DisqusComments from '../DisqusComments';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
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
    post: Entry<Post>;
}

const PostContent: React.FC<PostContentProps> = ({ post }) => {
    const url = `https://rdn.now.sh/${post.fields.alias}`;

    function renderPostContent(body: any) {
        const html = documentToHtmlString(body);
        return html;
    }

    function formatDate(date: Date) {
        return format(new Date(date), "d 'de' MMMM 'de' Y", { locale: ptBR });
    }

    return (
        <Container>
            <h4 className="description">{post.fields.descricao}</h4>

            <div className="author">
                <div className="pic">
                    <img
                        loading="lazy"
                        src={post.fields.autor.fields?.foto?.fields?.file?.url}
                        alt={post.fields.autor.fields.nome}
                        title={post.fields.autor.fields.nome}
                    />
                </div>

                <div className="info">
                    <span>{post.fields.autor.fields.nome}</span>
                    <time>{formatDate(post.fields.createdAt)}</time>
                </div>

                <div className="contact">
                    <a target="__blank" href={`https://twitter.com/${post.fields.autor.fields?.twitter}`}>
                        <FiTwitter color="#1da1f2" size={25} />
                    </a>

                    <a href={`mailto:${post.fields.autor.fields.email}`}>
                        <FiMail color="#e3cf65" size={25} />
                    </a>
                </div>
            </div>

            <div className="body" dangerouslySetInnerHTML={{ __html: renderPostContent(post.fields.body) }} />

            <div className="share-container">
                <div className="share">
                    <FacebookShareButton url={url} quote={post.fields.titulo}>
                        <FacebookIcon size={50} />
                    </FacebookShareButton>

                    <WhatsappShareButton title={post.fields.titulo} url={url}>
                        <WhatsappIcon size={50} />
                    </WhatsappShareButton>

                    <TwitterShareButton title={post.fields.titulo} url={url}>
                        <TwitterIcon size={50} />
                    </TwitterShareButton>

                    <TumblrShareButton url={url} title={post.fields.titulo} caption={post.fields.descricao}>
                        <TumblrIcon size={50} />
                    </TumblrShareButton>

                    <RedditShareButton url={url} title={post.fields.titulo}>
                        <RedditIcon size={50} />
                    </RedditShareButton>

                    <TelegramShareButton url={url} title={post.fields.titulo}>
                        <TelegramIcon size={50} />
                    </TelegramShareButton>

                    <EmailShareButton url={url} subject={post.fields.titulo} body={post.fields.descricao}>
                        <EmailIcon size={50} />
                    </EmailShareButton>

                    <LinkedinShareButton
                        url={url}
                        source={url}
                        title={post.fields.titulo}
                        summary={post.fields.descricao}
                    >
                        <LinkedinIcon size={50} />
                    </LinkedinShareButton>
                </div>

                <DisqusComments
                    articleId={post.fields.alias}
                    articleUrl={`https://rdn.now.sh/${post.fields.alias}`}
                    articleTitle={post.fields.titulo}
                />
            </div>
        </Container>
    );
};

export default PostContent;
