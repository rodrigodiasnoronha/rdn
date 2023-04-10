import styled from 'styled-components';

export default styled.button<{ hoverColor?: string }>`
    border: 1px solid transparent;
    padding: 5px 8px;
    background-color: #fff;
    cursor: pointer;
    border-radius: 4px;
    font-family: Roboto, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 16px;
    margin: 5px 0px;
    outline: 0px;

    :hover {
        background-color: ${(props) => props.hoverColor || '#e02041'};
        transition: 0.5s;
        color: #fff;
    }

    :active {
        opacity: 0.5;
        transition: opacity 0.25s;
    }

    :disabled {
        opacity: 0.5;
    }
`;
