import React from 'react';
import { FiTwitter, FiGithub, FiMail } from 'react-icons/fi';
import { Container } from './styles';

const Footer: React.FC = () => {
    return (
        <Container>
            <div className="info">
                <span>RDN Blog &#169; 2020</span>
            </div>

            <div className="links">
                <a href="https://twitter.com/xxxkckkxkxxk" target="__blank">
                    <FiTwitter size={25} />
                </a>
                <a href="https://github.com/rodrigodiasnoronha" target="__blank">
                    <FiGithub size={25} />
                </a>
                <a href="mailto:rodrigodnoronha@gmail.com" target="__blank">
                    <FiMail size={25} />
                </a>
            </div>
        </Container>
    );
};

export default Footer;
