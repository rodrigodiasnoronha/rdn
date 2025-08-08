import React, { Component } from 'react';
import styled from 'styled-components';
import { Footer, Head, Header } from '@/components';
import { getUserRepositories } from '@/services/githubApi';
import colors from '@/types/colors';

const Container = styled.main`
    display: flex;
    flex-direction: column;

    max-width: 1024px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    section h3 {
        font-size: 38px;
        margin: 25px 0px 15px ;
        font-weight: 500;
        color: #333;
    }
    
    section h4 {
        font-size: 32px;
        font-weight: 400;
    }

    section > p {
        font-family: Roboto Mono, monospace, Arial, Helvetica, sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.7rem;
        margin-top: 15px;
        padding-left: 1rem;
    }

    .sobre-mim {
        display: flex;
        align-items: center;
        margin-top: 45px;
    }

    .sobre-mim .foto {
        flex: 1;
        overflow: hidden;
    }

    .sobre-mim .foto img {
        max-width: 175px;
        width: 100%;
        border: 3px solid #8c9eff;
        border-radius: 10px;
    }

    .sobre-mim .descricao {
        flex: 3;
        padding-left: 1rem;
    }

    .sobre-mim .descricao p {
        font-family: Roboto Mono, monospace, Arial, Helvetica, sans-serif;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.7rem;
        margin-top: 15px;
        padding-left: 1rem;
    }

    .node {
        color: rgb(140, 200, 75);
        cursor: pointer;
    }

    .react {
        color: rgb(42, 199, 227);
        cursor: pointer;
    }

    .react-native {
        color: rgb(85, 104, 249);
        cursor: pointer;
    }

    .php {
        color: #8993be;
        cursor: pointer;
    }

    .kotlin {
        color: #1bade3;
    }

    .python {
        color: #ffd343;
    }

    .orange {
        color: ${colors.accent2};
    }

    @media (max-width: 1024px) {
        padding: 0px 10px;

        .sobre-mim {
            flex-direction: column;
        }

        .sobre-mim .foto {
            width: 70%;
            margin-left: auto;
            margin-right: auto;
        }

        .sobre-mim .descricao h3 {
            text-align: center;
        }

        .sobre-mim .descricao p {
            font-size: 18px;
            padding-left: 0px;
        }

        section > p {
            font-size: 16px;
        }
    }
`;

const Course = styled.div`
    display: flex;
    align-items: center;

    border: 3px solid #ccc;
    border-radius: 8px;
    margin-top: 15px;
    padding: 20px;

    > div {
        padding-left: 10px;
    }

    h5 {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 8px;
    }

    a,
    span {
        font-size: 15px;
        font-family: Roboto Mono, monospace, Arial, Helvetica, sans-serif;
    }

    a {
        color: #03a9f4;
    }

    @media (max-width: 490px) {
        padding: 10px;

        > div {
            padding-left: 0px;
        }
    }
`;

const Project = styled.div`
    border: 3px solid #ccc;
    border-radius: 8px;
    margin-top: 30px;
    padding: 20px;
    display: flex;
    flex-direction: column;

    .titulo-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    h5.titulo {
        font-size: 24px;
        font-weight: 500;
    }

    p.descricao {
        font-family: Roboto Mono, monospace, Arial, Helvetica, sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 1.7rem;
        margin-top: 15px;
        padding-left: 1rem;
    }

    a.link {
        padding-left: 1rem;
        margin-top: 10px;
    }

    @media (max-width: 1024px) {
        p.descricao {
            font-size: 16px;
            padding-left: 0px;
        }
    }

    @media (max-width: 490px) {
        padding: 10px;
    }
`;

const TagContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;

const Tag = styled.span<{ backgroundColor: string }>`
    background-color: ${(props) => props.backgroundColor};
    padding: 5px 10px;
    border-radius: 8px;
    margin: 5px 5px;
    font-weight: 500;
    color: white;
    font-size: 16px;
`;

class Me extends Component {
    state = {
        repositories: []
    };

    componentDidMount(): void {
        getUserRepositories('rodrigodiasnoronha')
            .then(({ data }) => {
                this.setState({ repositories: data });
            })
            .catch(() => {
            });
    }

    pickTechColor(tech: string) {
        switch (tech) {
            case 'adonis':
                return colors.const;

            case 'javascript':
                return colors.base2;

            case 'kotlin':
                return colors.const;

            case 'mobile':
                return colors.dim2;

            case 'react':
                return colors.accent1;

            case 'react-native':
                return colors.accent1;

            case 'discordjs':
                return colors.const;

            case 'bot':
                return colors.dim4;

            case 'nodejs':
                return colors.call;

            case 'api':
                return colors.base1;

            case 'mongodb':
                return colors.call;

            case 'html':
                return colors.accent2;

            case 'css':
                return colors.accent1;

            case 'vuejs':
                return colors.call;

            case 'python':
                return colors.call;

            case 'fastapi':
                return colors.pure1;

            case 'typescript':
                return colors.base1;

            default:
                return '#333';
        }
    }

    render() {
        return (<React.Fragment>
            <Head>
                <title key="title">Sobre mim | Rodrigo Dias Noronha</title>
            </Head>

            <Header title="Ei! Prazer! Deslize para baixo para saber mais sobre mim!" />

            <Container>
                <section className="sobre-mim">
                    <div className="foto">
                        <img
                            src="/images/foto-perfil.png"
                            alt="Foto - Portfólio"
                            title="Foto - Portfólio"
                            id="foto-perfil"
                        />
                    </div>
                    <div className="descricao">
                        <h3>
                            Olá! <span className="orange">Hi There!</span>
                        </h3>

                        <p>
                            Meu nome é Rodrigo Dias Noronha. 25 anos. Desenvolvedor Web e Mobile apaixonado por
                            tecnologias!
                        </p>
                        <p>
                            Trabalho com soluções em desenvolvimento de software com as mais recentes tecnologias do
                            mercado, como <span className="react tech-effect">React</span>,{' '}
                            <span className="react-native tech-effect">React Native</span>,
                            <span className="node tech-effect">Node</span> e{' '}
                            <span className="python tech-effect">Python</span>. Estudando, atualmente,
                            desenvolvimento mobile com <span className="kotlin">Kotlin</span>.
                        </p>
                    </div>
                </section>

                <section className="experiencia">
                    <h3>Impacto em projetos</h3>

                    <p>
                        - Reformulação no aplicativo mobile da <a href="https://www.codhab.df.gov.br/">Codhab</a>,
                        visando melhorar o atendimento de todos os partipantes de seus programas no DF.
                    </p>

                    <p>
                        - Desenvolvimento da plataforma Intranet, para atendimento em todo DF da <a
                        href="https://www.codhab.df.gov.br/">Codhab</a>
                    </p>

                    <p>
                        - Desenvolvimento de aplicações Intranet para a <a href="https://www.novacap.df.gov.br/">Novacap
                        DF</a>.
                    </p>

                    <p>
                        - Desenvolvimento de <a href="https://extranet.codhab.df.gov.br/">Extranet</a> para <a
                        href="https://www.codhab.df.gov.br/">Codhab DF</a>, visando atender as Entidades
                        cadastradas
                        em seus programas.
                    </p>
                </section>


                <section className="experiencia">
                    <h3>Experiência</h3>

                    <p className="font-weight-bold">
                        Trabalhando há pouco mais de 6 anos na área, tive passagens por:
                    </p>

                    <p>
                        - 3PSystem - Desenvolvedor Frontend - 2018-2021 - Remoto
                    </p>

                    <p>
                        - 4Quality - Desenvolvedor Mobile - 2021 - Remoto
                    </p>

                    <p>
                        - <a href="https://tellus.tec.br/">Tellus</a> - Desenvolvedor Fullstack - 2021-2023 -
                        Presencial
                    </p>

                    <p>
                        - <a href="https://v2solucoes.com.br/">V2 Soluções</a> - Desenvolvedor Fullstack - 2023-Até o
                        momento - Híbrido
                    </p>
                </section>

                <section className="educacao-e-cursos">
                    <h3>Educação e cursos</h3>

                    {courses.map((course) => (<Course key={Math.floor(Math.random() * 1000000)}>
                        <div>
                            <h5>{course.name}</h5>
                            <span>
                                        De:{' '}
                                <a href={course.fromLink} target="_blank" rel="noreferrer">
                                            {course.from}
                                        </a>
                                    </span>
                        </div>
                    </Course>))}
                </section>

                <Footer />
            </Container>
        </React.Fragment>);
    }
}

const courses = [{
    name: 'Sistemas de Informação (8º semestre trancado)',
    from: 'Centro Universitário de Desenvolvimento do Centro Oeste - Unidesc',
    fromLink: 'https://www.unidesc.edu.br/'
}, {
    name: 'Análise e Desenvolvimento de Sistemas (5º semestre trancado)',
    from: 'Centro Universitário de Desenvolvimento do Centro Oeste - Unidesc',
    fromLink: 'https://www.unidesc.edu.br/'
}, {
    name: 'Curso Javascript web moderno', from: 'Udemy', fromLink: 'https://www.udemy.com/course/curso-web/'
}, {
    name: 'Curso Firebase Web',
    from: 'Udemy',
    fromLink: 'https://www.udemy.com/course/firebase-para-web-e-apps-hibridos/'
}, {
    name: 'Curso Git e Github', from: 'Udemy', fromLink: 'https://www.udemy.com/course/git-e-github'
}];

export default Me;
