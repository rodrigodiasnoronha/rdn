import styled from 'styled-components';
import colors from '../../types/colors';

export const Container = styled.main`
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

export const Course = styled.div`
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
    }

    a,
    span {
        font-size: 15px;
        font-family: monospace;
    }

    a {
        color: #03a9f4;
    }
`;

export const Project = styled.div`
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
        font-wei    ght: 500;
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
        }
    }
`;

export const TagContainer = styled.div`
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
`;

export const Tag = styled.span<{ backgroundColor: string }>`
    background-color: ${(props) => props.backgroundColor};
    padding: 5px 10px;
    border-radius: 8px;
    margin: 5px 5px;
    font-weight: 500;
    color: white;
    font-size: 16px;
`;
