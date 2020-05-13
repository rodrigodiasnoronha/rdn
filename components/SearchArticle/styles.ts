import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: center;

    height: 50px;
    margin: 15px 0px;

    input {
        flex: 5;
        height: 100%;
        padding-left: 10px;
        border: 1px solid transparent;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;

        background-color: #f5f5f5;
        font-family: Jost, Roboto, Arial, Helvetica, sans-serif;
    }

    button {
        width: 50px;
        height: 100%;
        border: 1px solid transparent;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        background-color: #f5f5f5;
    }

    button:hover {
        background-color: var(--lucyOrange);
        transition: 0.5s;
    }
`;
