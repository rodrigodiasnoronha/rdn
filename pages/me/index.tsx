import React, { Component } from 'react';
import { Footer, Head, Header } from '../../components';
import { FiNavigation } from 'react-icons/fi';
import styled from 'styled-components';
import colors from '../../types/colors';

const Container = styled.main`
    display: flex;
    flex-direction: column;

    max-width: 1024px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;

    section h3 {
        font-size: 38px;
        margin: 25px 0px 15px;
        font-weight: 500;
        color: #333;
    }

    section > p {
        font-family: monospace;
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
        width: 100%;
        border: 3px solid #8c9eff;
        border-radius: 50%;
    }

    .sobre-mim .descricao {
        flex: 3;
        padding-left: 1rem;
    }

    .sobre-mim .descricao p {
        font-family: monospace;
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
        font-family: monospace;
    }

    a {
        color: #03a9f4;
    }

    @media (max-width: 490px) {
        padding: 10px;
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
        font-family: monospace;
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
    renderCourses() {}

    render() {
        return (
            <React.Fragment>
                <Head>
                    <title key="title">Sobre mim | RDN Blog</title>
                </Head>

                <Header title="Ei! Prazer! Deslize para baixo para saber mais sobre mim!" />

                <Container>
                    <section className="sobre-mim">
                        <div className="foto">
                            <img
                                src="https://avatars.githubusercontent.com/u/63525765?v=4"
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
                                Meu nome é Rodrigo Dias Noronha. Desenvolvedor Web e Mobile apaixonado por tecnologias!
                            </p>
                            <p>
                                Estudando e desenvolvendo com as mais recentes tecnologias do mercado, como{' '}
                                <span className="react tech-effect">React</span>,{' '}
                                <span className="react-native tech-effect">React Native</span> e{' '}
                                <span className="node tech-effect">Node</span>. Sempre me arriscando um pouco no{' '}
                                <span className="php tech-effect">PHP</span>!
                            </p>
                        </div>
                    </section>

                    <section className="experiencia">
                        <h3>Experiência</h3>

                        <p>
                            Sempre trabalhei e desenvolvi projetos como Desenvolvedor Freelancer. Também participando de
                            projetos sociais e eventos de programação!
                        </p>
                    </section>

                    <section className="educacao-e-cursos">
                        <h3>Educação e cursos</h3>

                        {courses.map((course) => (
                            <Course key={Math.floor(Math.random() * 1000000)}>
                                <div>
                                    <h5>{course.name}</h5>
                                    <span>
                                        De:{' '}
                                        <a href={course.fromLink} target="_blank" rel="noreferrer">
                                            {course.from}
                                        </a>
                                    </span>
                                </div>
                            </Course>
                        ))}
                    </section>

                    <section className="projetos-pessoais">
                        <h3>Projetos Pessoais</h3>

                        <p>
                            Aqui estão alguns de meus projetos pessoais sobre, apenas clique no link para ser
                            redirecionado direto para o código fonte!
                        </p>

                        <div className="projetos">
                            {projects.map((project) => (
                                <Project key={Math.floor(Math.random() * 100000)}>
                                    <div>
                                        <div className="titulo-container">
                                            <h5 className="titulo">{project.name}</h5>
                                            <a href={project.link} target="__blank">
                                                <FiNavigation color="#333" size={30} />
                                            </a>
                                        </div>

                                        {project.tags && (
                                            <TagContainer>
                                                {project.tags.map((tag) => (
                                                    <Tag
                                                        key={Math.floor(Math.random() * 10000)}
                                                        backgroundColor={tag.color}
                                                    >
                                                        {tag.name}
                                                    </Tag>
                                                ))}
                                            </TagContainer>
                                        )}

                                        <p className="descricao">{project.description}</p>
                                    </div>

                                    <div className="imagens"></div>
                                </Project>
                            ))}
                        </div>
                    </section>

                    <Footer />
                </Container>
            </React.Fragment>
        );
    }
}

const courses = [
    {
        name: 'Análise e Desenvolvimento de Sistemas (5º semestre trancado)',
        from: 'Centro Universitário de Desenvolvimento do Centro Oeste - Unidesc',
        fromLink: 'https://www.unidesc.edu.br/',
    },
    {
        name: 'Sistemas de Informação (6º semestre cursando)',
        from: 'Centro Universitário de Desenvolvimento do Centro Oeste - Unidesc',
        fromLink: 'https://www.unidesc.edu.br/',
    },
    {
        name: 'Curso Javascript web moderno',
        from: 'Udemy',
        fromLink: 'https://www.udemy.com/course/curso-web/',
    },
    {
        name: 'Curso Firebase Web',
        from: 'Udemy',
        fromLink: 'https://www.udemy.com/course/firebase-para-web-e-apps-hibridos/',
    },
    {
        name: 'Curso Git e Github',
        from: 'Udemy',
        fromLink: 'https://www.udemy.com/course/git-e-github',
    },
];

const projects = [
    {
        name: 'App Engajamento',
        description:
            'Aplicativo Mobile e Web criada para a igreja Sara Nossa Terra, que visa ajudar os superiores da igreja na administração de eventos e presença do seus fiéis em eventos e cultos. ',
        link: 'https://github.com/sara-nossa-terra/engajamento',
        tags: [
            { name: 'PHP', color: '#9fa8da' },
            { name: 'Jquery', color: '#f57c00' },
            { name: 'Projeto Social', color: '#e53935' },
            { name: 'React Native', color: '#536dfe' },
        ],
    },
    {
        name: 'Be The Hero',
        description:
            'Aplicação Web e Mobile voltada para resolver casos de ONGs independentes. Criada com Node, React e React Native no evento Omnistack, produzido pela Rocketseat',
        link: 'https://github.com/rodrigodiasnoronha/be-the-hero/tree/master/screenshots',
        tags: [
            { name: 'React', color: '#039be5' },
            { name: 'Node', color: '#64dd17' },
            { name: 'Rocketseat', color: '#b388ff' },
        ],
    },
    {
        name: 'Saints',
        description:
            'Blog pessoal meu (descontinuado) para produzir conteúdo sobre o time de futebol americano New Orleans Saints, no qual sou um grande fã! Criado com React e Firebase',
        link: 'https://defensor-saints.web.app/',
        tags: [
            { name: 'React', color: '#039be5' },
            { name: 'Firebase', color: '#009688' },
        ],
    },
    {
        name: 'Instaclone',
        description: 'UI Clone do Instagram criada com React Native',
        link: 'https://github.com/rodrigodiasnoronha/instaclone',
        tags: [{ name: 'React Native', color: '#536dfe' }],
    },
    {
        name: 'Tindesc',
        description:
            'Projeto que visa emular como funciona uma rede social. No caso, foi um projeto da faculdade que fiz um tipo de "Tinder da Faculdade", onde as pessoas da faculdade se cadastram e podem se conhecer! Construido com Express e React',
        link: 'https://github.com/rodrigodiasnoronha/tindesc',
        tags: [
            { name: 'React', color: '#039be5' },
            { name: 'Node', color: '#64dd17' },
        ],
    },
    {
        name: 'Calculadora',
        description: 'Meu primeiro aplicativo. Uma calculadora criada com React Native',
        link: 'https://github.com/rodrigodiasnoronha/rn-calculator',
        tags: [{ name: 'React Native', color: '#536dfe' }],
    },
];

export default Me;
