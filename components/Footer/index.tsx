import React from 'react';
import { FiGithub, FiMail, FiTwitter } from 'react-icons/fi';

const Footer: React.FC = () => {
    return (
        <footer className='flex justify-center items-center flex-col p-3'>
            <div className="info text-accent2">
                <span>RDN Blog &#169; 2020</span>
            </div>

            <div className="flex flex-row gap-4">
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
        </footer>
    );
};

export default Footer;
