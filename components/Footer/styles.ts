import styled from 'styled-components';

export const Container = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border: 1px solid transparent;

    padding: 10px;
    margin-top: 50px;

    a {
        margin-left: 8px;
        margin-right: 8px;
    }

    a svg {
        color: #333;
    }

    a svg:hover {
        transition: 0.5s;
        color: var(--lucyOrange);
    }

    .info {
        padding: 5px;
    }

    .info span {
        font-size: 14px;
        font-family: Roboto, Arial, 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva,
            Verdana, sans-serif;
        font-weight: 500;
    }

    .links {
        padding: 10px;
        padding-bottom: 5px;
    }
`;
