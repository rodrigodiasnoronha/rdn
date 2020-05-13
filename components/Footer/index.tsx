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
        <a href="https://twitter.com/roketman09" target="__blank">
          <FiTwitter size={30} />
        </a>
        <a href="https://github.com/rodrigodiasnoronha" target="__blank">
          <FiGithub size={30} />
        </a>
        <a href="mailto:rodrigonoronha09@gmail.com" target="__blank">
          <FiMail size={30} />
        </a>
      </div>
    </Container>
  );
};

export default Footer;
