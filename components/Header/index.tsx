import React, { memo } from 'react';
import Link from 'next/link';
import { Container } from './styles';
import { FiTwitter, FiMail } from 'react-icons/fi';

interface Props {
    backgroundImage?: string;
    title?: string;
    date?: string;
}

const Header: React.FC<Props> = ({ backgroundImage, title, date, phrase }) => {
    const image = wallpapers[Math.floor(Math.random() * wallpapers.length)];


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

    const dateFormated = `${formatMonth(date)} ${formatDay(date)}, ${formatYear(
        date
    )}`;

    return (
        <Container image={backgroundImage || image}>
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
                                <a
                                    href="http://rodrigodn.netlify.com/"
                                    target="__blank"
                                >
                                    Sobre
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <div className="social-media">
                        <a
                            href="https://twitter.com/roketman09"
                            target="__blank"
                        >
                            <FiTwitter size={25} />
                        </a>

                        <a
                            href="mailto:rodrigonoronha09@gmail.com"
                            target="__blank"
                        >
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
                            <a
                                href="http://rodrigodn.netlify.com/"
                                target="__blank"
                            >
                                Sobre
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="phrase-container">
                    <h3>{title || 'Do what you must need do!'}</h3>
                    {date && <time className="date">{dateFormated}</time>}
                </div>
            </div>
        </Container>
    );
};

const wallpapers = [
    'wp.jpg',
    'pc.jpg',
    'wp5.jpg',
    'pc2.jpg',
    'pc1.jpg',
    'wp2.jpg',
];

export default memo(Header);
