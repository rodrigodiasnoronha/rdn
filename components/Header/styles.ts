import styled from 'styled-components';

export const Container = styled.header<{ image: string }>`
    height: 100%;
    background-image: url(${(props) => props.image});
    background-position: center center;
    background-attachment: fixed;
    background-size: cover;

    .opacity {
        height: 100%;
        width: 100%;

        background-color: rgba(0, 0, 0, 0.7);
    }

    .header {
        height: 70px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;
        padding: 0px 25px;

        background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.8),
            rgba(0, 0, 0, 0)
        );
    }

    .title h1 {
        font-family: Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
        font-weight: 500;
        color: #fff;
        letter-spacing: 4.5px;
        font-size: 20px;
        cursor: pointer;
    }

    .navbar ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navbar ul li {
        padding: 0px 5px;
    }

    .navbar ul li a {
        font-family: Jost, Roboto, -apple-system, BlinkMacSystemFont, 'Segoe UI',
            Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue',
            sans-serif;
        font-weight: 500;
        font-size: 18px;
        text-transform: uppercase;
        text-decoration: none;
    }

    .social-media a {
        padding: 0px 5px;
    }

    .mobile {
        display: none;
    }

    .phrase-container {
        height: 100%;
        width: 100%;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .phrase-container h3 {
        font-family: Balsamiq Sans, Roboto, Arial, Helvetica, sans-serif;
        font-weight: 400;
        font-size: 40px;
        text-align: center;
        z-index: 10 !important;
        color: #fff;
        opacity: 1;
        max-width: 800px;
        width: 100%;
    }

    .phrase-container .date {
        text-align: center;
        color: #ccc;
        font-family: Roboto, Jost, Arial, Helvetica, sans-serif;
        font-weight: 400;
    }

    @media (max-width: 700px) {
        .header {
            padding: 0px 15px;
        }

        .navbar {
            display: none;
        }

        .mobile {
            display: initial;
        }

        .mobile ul {
            display: flex;
            justify-content: center;
            align-items: center;
        }

        .mobile li {
            padding: 0px 5px;
        }

        .mobile a {
            font-family: Jost, Roboto, -apple-system, BlinkMacSystemFont,
                'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
                'Helvetica Neue', sans-serif;
            font-weight: 500;
            font-size: 18px;
            text-transform: uppercase;
            text-decoration: none;
        }

        .phrase-container h3 {
            font-size: 1.8rem;
            padding: 0px 5px;
        }
    }
`;
