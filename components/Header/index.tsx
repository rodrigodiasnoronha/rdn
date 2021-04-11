import React from 'react';
import Link from 'next/link';
import { Container } from './styles';
import { FiTwitter, FiMail } from 'react-icons/fi';

interface Props {
    backgroundImage?: string;
    title?: string;
    date?: string;
}

const Header: React.FC<Props> = ({ backgroundImage, title, date }) => {
    const image = wallpapers[Math.floor(Math.random() * wallpapers.length)];

    return (
        <Container image={backgroundImage || `/header/${image}`}>
            <div className="opacity">
                <div className="header">
                    <div className="title">
                        <Link href="/">
                            <h1>rdnblog</h1>
                        </Link>
                    </div>

                    <nav className="navbar">
                        <ul>
                            <li>
                                <Link href="/articles">
                                    <a>Artigos</a>
                                </Link>
                            </li>
                            <li>
                                <Link href="/me">Sobre</Link>
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
                            <Link href="/articles">
                                <a>Artigos</a>
                            </Link>
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
        </Container>
    );
};

const wallpapers = [
    'wp.jpg',
    'wp2.jpg',
    'wp3.jpg',
    'wp4.jpg',
    'wp5.jpg',
    'wp6.jpg',
    'wp7.jpg',
    'wp8.jpg',
    'wp9.jpg',
    'wp10.jpg',
];

export default Header;
