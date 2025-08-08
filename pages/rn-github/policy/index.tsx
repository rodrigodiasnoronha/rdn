import { NextPage } from 'next'; // eslint-disable-line
import React from 'react';
import styled from 'styled-components';
import { Head } from '@/components';

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
        margin-top: 35px;
        font-size: 28px;
        font-weight: 500;
        text-align: left;
        color: #333;
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
            'Open Sans', 'Helvetica Neue', sans-serif;
    }

    h2:first-child {
        text-align: center;
        font-size: 32px;
        margin-top: 0;
        color: #8c9eff;
    }

    p {
        font-family: Roboto Mono, monospace, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.7rem;
        margin-bottom: 20px;
        color: #555;
        text-align: justify;
    }

    p:last-child {
        margin-top: 40px;
        padding: 20px;
        background-color: #f8f9fa;
        border-left: 4px solid #8c9eff;
        border-radius: 8px;
        font-weight: 500;
        text-align: center;
    }

    strong {
        color: #333;
        font-weight: 600;
    }

    .more {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 15px 0px;
    }

    @media (max-width: 700px) {
        padding: 0px 15px;
        margin: 20px auto;

        h2 {
            font-size: 24px;
            margin-top: 30px;
        }

        h2:first-child {
            font-size: 28px;
        }

        p {
            font-size: 15px;
            line-height: 1.6rem;
        }
    }
`;

const RNGithubPolicy: NextPage = (props) => {
    return (
        <React.Fragment>
            <Head>
                <title key="title">Politica de Privacidade | RN Github</title>
            </Head>

            <Container>
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

                <h2>4. Segurança de Dados</h2>

                <p>
                    Temos medidas de segurança em vigor para proteger suas informações pessoais contra acesso não
                    autorizado ou uso indevido.
                </p>

                <h2>5. Alterações nesta Política de Privacidade</h2>

                <p>
                    Podemos atualizar esta Política de Privacidade periodicamente para refletir mudanças em nossas
                    práticas de privacidade. Recomendamos que você reveja esta política regularmente.
                </p>

                <h2>6. Entre em Contato</h2>

                <p>
                    Se tiver dúvidas sobre esta Política de Privacidade ou suas informações pessoais, entre em
                    contato conosco pelo e-mail rodrigodnoronha@gmail.com.
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
                </p>
            </Container>
        </React.Fragment>
    );
};

export default RNGithubPolicy;
