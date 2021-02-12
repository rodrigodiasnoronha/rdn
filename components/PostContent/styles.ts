import styled from 'styled-components';

export const Container = styled.article`
    max-width: 1000px;
    width: 100%;

    margin: 0px auto;
    margin-top: 35px;

    .description {
        font-size: 35px;
        font-family: Jost, Arial, Helvetica, sans-serif;
        font-weight: 400;
        color: #333;

        max-width: 700px;
        width: 100%;
        margin: 15px auto;

        @media (max-width: 700px) {
            padding: 0px 15px;
        }
    }

    .author {
        border: 1px solid transparent;

        max-width: 700px;
        width: 100%;
        margin: 15px auto;

        display: flex;
        align-items: center;
        padding: 10px 5px;
        border-top-color: #ccc;
    }

    .author img {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin: 5px;
    }

    .author .info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0px 10px;
    }

    .author .info span {
        font-family: Roboto, Jost, Arial, sans-serif;
        font-size: 16px;
        color: #333;
        margin-bottom: 5px;
    }

    .author .info time {
        font-size: 14px;
        color: #999;
        font-family: Roboto, Jost, Arial, sans-serif;
    }

    .author .contact a {
        padding: 3px;
    }

    .author .contact svg:hover {
        opacity: 0.6;
        transition: opacity 0.5s;
    }

    .article-image {
        width: 100%;
        margin: 35px auto;
        border-radius: 3px;
        overflow: hidden;

        @media (max-width: 700px) {
            margin: 25px auto;
        }
    }

    .share-container {
        display: flex;
        flex-direction: column;

        padding: 20px 0px;
        border: 1px solid transparent;
        border-top-color: #ccc;
    }

    .share-container h4 {
        text-align: center;
        marbin-bottom: 10px;
    }

    .share {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
    }

    .body {
        font-family: Jost, Arial, Helvetica, sans-serif;
        font-weight: 400;

        max-width: 700px;
        width: 100%;
        margin: 0px auto;
        margin-bottom: 35px;
    }

    .body * {
        font-size: 1.2rem;
        font-family: Jost, Roboto, Arial, Helvetica, sans-serif;
    }

    @media (max-width: 700px) {
        .body {
            padding: 0px 15px;
            overflow-x: hidden;
        }
    }

    .body a {
        color: #fb7da7;
    }

    .body a:hover {
        opacity: 0.5;
        transition: opacity 1s;
        text-decoration-style: solid;
        text-decoration-line: underline;
    }

    .body a:active {
        opacity: 0.2;
        transition: opacity 0.5s;
    }

    .body h5 {
        font-size: 24px;
        font-weight: 500;
        margin: 20px 0px;
    }

    .body h4 {
        font-size: 28px;
        font-weight: 500;
        margin: 20px 0px;
    }
    .body h3 {
        font-size: 32px;
        font-weight: 500;
        margin: 20px 0px;
    }
    .body h2 {
        font-size: 36px;
        font-weight: 500;
        margin: 20px 0px;
    }
    .body h1 {
        font-size: 40px;
        font-weight: 500;
        margin: 20px 0px;
    }

    .body code {
        font-family: monospace, consolas, sans-serif;
        font-size: 87.5%;
        color: #01579b;
        word-wrap: break-word;
    }
    /* Estilos do Bootstrap (colei de node_modules/bootstrap/dist/css/boostrap.csss) */
    .body img {
        width: 100% !important;
        margin: 25px 0px;
    }

    .body {
        table {
            width: 100%;
            margin-bottom: 1rem;
            margin-top: 1rem;
            color: #212529;
            overflow-x: scroll;
        }

        table th,
        table td {
            padding: 0.75rem;
            vertical-align: top;
            border-top: 1px solid #dee2e6;
        }

        table thead th {
            vertical-align: bottom;
            border-bottom: 2px solid #dee2e6;
        }

        table tbody + tbody {
            border-top: 2px solid #dee2e6;
        }

        table th {
            color: #fff;
            background-color: #343a40;
            border-color: #454d55;
            font-size: 20px;
        }
    }
`;
