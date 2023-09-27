import { NextPage } from 'next'; // eslint-disable-line
import React from 'react';
import styled from 'styled-components';
import { Footer, Head, Header } from '../../../components';

const Container = styled.article`
    width: 100%;
    height: 100%;

    display: flex;
    flex-direction: column;

    max-width: 700px;
    width: 100%;
    margin: 35px auto;

    h2 {
        margin-bottom: 25px;
        margin-top: 25px;
        font-size: 25px;
        font-weight: 500;
        text-align: center;
    }

    .more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0px;
    }

    @media (max-width: 700px) {
        padding: 0px 10px;
    }
`;

const RNGithubPolicy: NextPage = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title key="title">Politica de Privacidade | RN Github</title>
            </Head>

            <Container>
                {/* <SearchArticle updatePosts={setPosts} /> */}
                <div className="div">
                    <h2>Bem-vindo ao RN Github! Agradecemos por escolher usar nosso aplicativo.</h2>

                    <h2>1. Informações que Coletamos</h2>

                    <p>
                        1.1 <strong>Informações de Dispositivo</strong>: Podemos coletar informações sobre seu
                        dispositivo móvel, incluindo o modelo, sistema operacional, identificadores de dispositivo
                        exclusivos e informações de rede.
                    </p>

                    <h2>2. Como Usamos Suas Informações</h2>

                    <p>
                        2.1 <strong>Fornecimento de Serviços</strong>: Utilizamos suas informações para fornecer e
                        melhorar nossos serviços, personalizando conteúdo, fornecendo suporte ao cliente e facilitando
                        transações.
                    </p>

                    <p>
                        2.2 <strong>Comunicação</strong>: Podemos usar suas informações de contato para enviar
                        atualizações sobre o aplicativo, notificações importantes e responder a suas solicitações.
                    </p>

                    <h2>3. Compartilhamento de Informações</h2>

                    <p>
                        3.1 <strong>Requisitos Legais</strong>: Em conformidade com as leis aplicáveis, podemos divulgar
                        informações pessoais em resposta a solicitações governamentais ou para cumprir obrigações
                        legais.
                    </p>

                    <h2>5. Segurança de Dados</h2>

                    <p>
                        Temos medidas de segurança em vigor para proteger suas informações pessoais contra acesso não
                        autorizado ou uso indevido.
                    </p>

                    <h2>6. Alterações nesta Política de Privacidade</h2>

                    <p>
                        Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas
                        práticas de privacidade. Recomendamos que você reveja esta política regularmente.
                    </p>

                    <h2>7. Entre em Contato</h2>

                    <p>
                        Se tiver dúvidas sobre esta Política de Privacidade ou suas informações pessoais, entre em
                        contato conosco pelo e-mail [endereço de e-mail de contato].
                    </p>

                    <p>
                        Obrigado por confiar em RN Github! Estamos comprometidos em proteger sua privacidade e fornecer
                        a melhor experiência possível em nosso aplicativo.
                    </p>

                    <p>
                        Rodrigo Dias Noronha
                        <br />
                        Brasília - DF
                        <br />
                        rodrigodnoronha@gmail.com
                        <br />
                    </p>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default RNGithubPolicy;
