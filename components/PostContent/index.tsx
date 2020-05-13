import React from 'react';
import { FiTwitter, FiMail, FiInstagram } from 'react-icons/fi';
import { Post } from '../../types'; // eslint-disable-line
import { Entry } from 'contentful'; // eslint-disable-line
import { Container } from './styles';
import ReactMarkdown from 'react-markdown';
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
} from 'react-share';

interface Props {
    post: Entry<Post>;
}

const PostContent: React.FC<Props> = ({ post }) => {
    const url = `http://localhost:3000/${post.fields.alias}`;

    function formatDay(dateReceived: string) {
        return new Date(dateReceived).getDate();
    }

    function formatMonth(dateReceived: string) {
        const month = new Date(dateReceived).getMonth() + 1;

        switch (month) {
            case 1:
                return 'JAN';

            case 2:
                return 'FEV';

            case 3:
                return 'MAR';

            case 4:
                return 'ABR';

            case 5:
                return 'MAI';

            case 6:
                return 'JUN';

            case 7:
                return 'JUL';

            case 8:
                return 'AGO';

            case 9:
                return 'SET';

            case 10:
                return 'OUT';

            case 11:
                return 'NOV';

            case 12:
                return 'DEZ';

            default:
                return String(month);
        }
    }

    function formatYear(dateReceived: string) {
        return new Date(dateReceived).getFullYear();
    }

    return (
        <Container>
            <h4 className="description">{post.fields.description}</h4>

            <div className="author">
                <div className="pic">
                    <img
                        src={
                            post.fields.author.fields?.avatar?.fields?.file?.url
                        }
                        alt={post.fields.author.fields.name}
                        title={post.fields.author.fields.name}
                    />
                </div>

                <div className="info">
                    <span>{post.fields.author.fields.name}</span>
                    <time>
                        {formatMonth(post.fields.createdAt)}{' '}
                        {formatDay(post.fields.createdAt)}
                        {', '}
                        {formatYear(post.fields.createdAt)}
                    </time>
                </div>

                <div className="contact">
                    <a
                        target="__blank"
                        href={`https://twitter.com/${post.fields.author.fields?.twitter}`}
                    >
                        <FiTwitter color="#1da1f2" size={25} />
                    </a>

                    {post.fields.author.fields?.instagram && (
                        <a
                            target="__blank"
                            href={`https://instagram.com/${post.fields.author.fields?.instagram}`}
                        >
                            <FiInstagram color="#fb7da7" size={25} />
                        </a>
                    )}

                    <a href={`mailto:${post.fields.author.fields.email}`}>
                        <FiMail color="#e3cf65" size={25} />
                    </a>
                </div>
            </div>

            <ReactMarkdown className="body" source={post.fields.body} />

            <div className="share-container">
                <h5>Compartilhe este artigo</h5>

                <div className="share">
                    <FacebookShareButton url={url} quote={post.fields.title}>
                        <FacebookIcon size={50} />
                    </FacebookShareButton>

                    <WhatsappShareButton title={post.fields.title} url={url}>
                        <WhatsappIcon size={50} />
                    </WhatsappShareButton>

                    <TwitterShareButton title={post.fields.title} url={url}>
                        <TwitterIcon size={50} />
                    </TwitterShareButton>

                    <TumblrShareButton
                        url={url}
                        title={post.fields.title}
                        caption={post.fields.description}
                    >
                        <TumblrIcon size={50} />
                    </TumblrShareButton>

                    <RedditShareButton url={url} title={post.fields.title}>
                        <RedditIcon size={50} />
                    </RedditShareButton>

                    <TelegramShareButton url={url} title={post.fields.title}>
                        <TelegramIcon size={50} />
                    </TelegramShareButton>

                    <EmailShareButton
                        url={url}
                        subject={post.fields.title}
                        body={post.fields.description}
                    >
                        <EmailIcon size={50} />
                    </EmailShareButton>
                </div>
            </div>
        </Container>
    );
};
export default PostContent;
