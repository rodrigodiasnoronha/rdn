import React from 'react';
import Link from 'next/link';
import { Container } from './styles';
import { FiMail, FiTwitter } from 'react-icons/fi';

interface Props {
    backgroundImage?: string;
    title?: string;
    date?: string;
}

const Header: React.FC<Props> = ({ backgroundImage, title, date }) => {
    const image = wallpapers[Math.floor(Math.random() * wallpapers.length)];

    return (<Container image={backgroundImage || `/header/${image}`}>
            <div className="opacity">
                <div className="header">
                    <div className="title">
                        <Link href="/" legacyBehavior>
                            <h1>rdnblog</h1>
                        </Link>
                    </div>

                    <nav className="navbar">
                        <ul>
                            <li>
                                <Link href="/articles" className="text-white">
                                    Artigos
                                </Link>
                            </li>
                            <li>
                                <Link href="/me" className="text-white">
                                    Sobre
                                </Link>
                            </li>
                        </ul>
                    </nav>

                    <div className="social-media">
                        <a href="https://twitter.com/xxxkckkxkxxk" target="__blank">
                            <FiTwitter size={25} />
                        </a>

                        <a href="mailto:rodrigodnoronha@gmail.com" target="__blank">
                            <FiMail size={25} />
                        </a>
                    </div>
                </div>

                <div className="mobile">
                    <ul>
                        <li>
                            <Link href="/articles">Artigos</Link>
                        </li>
                        <li>
                            <Link href="/me">Sobre mim</Link>
                        </li>
                    </ul>
                </div>

                <div className="phrase-container">
                    <h3>{title || 'Do what you must need do!'}</h3>
                    {date && <time className="date">{date}</time>}
                </div>
            </div>
        </Container>);
};

const wallpapers = [
    'header-1.jpg',
    'header-2.jpg',
    'header-3.jpg',
    'header-4.jpg',
    'header-5.jpg',
    'header-6.jpg',
];

export default Header;
