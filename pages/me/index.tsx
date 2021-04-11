import React, { Component } from 'react';
import { Footer, Head, Header } from '../../components';
import { Container, Course, Project, TagContainer, Tag } from './styles';
import { FiInfo, FiNavigation } from 'react-icons/fi';

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
