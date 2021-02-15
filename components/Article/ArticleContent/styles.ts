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
        max-width: 700px;
        width: 100%;
        margin: 15px auto;
    }

    .body h1,
    .body h2,
    .body h3,
    .body h4 {
        margin: 15px 0px;
        font-weight: 500;
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

    .body {
        font-weight: 400;
        max-width: 700px;
        width: 100%;
        margin: 0px auto;
        margin-bottom: 35px;
    }

    .body p {
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-size: 1.2rem;
        line-height: 30px;
    }

    .body pre {
        border-radius: 4px;
        margin: 30px 0px;
    }

    .body pre * {
        font-family: consolas, sans-serif;
    }


`;