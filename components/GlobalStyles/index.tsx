import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

    :root {
        --bgDark: #222;
        --bgWhite: #fff;
        --text: #333;
        --textGray: #555;
        --lucyBlue: #51c7da;
        --lucyPink: #fb7da7;
        --lucyConst: #af98e6;
        --lucyPure1: #dfdfdf;
        --lucyPure2: #d7d7d7;
        --lucyOrange: #fdad5d;
        --lucyDim4: #c3b5d3;
    }


    * {
        margin: 0px;
        padding: 0px;
        outline: 0px;
        box-sizing: border-box;
        font-family: Roboto, Arial, Helvetica, sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
    
    }

    h1,
    h2,
    h3,
    h4,
    h5, 
    p, 
    span, 
    time,div {
        color: var(--text);
    }


    ul, li {
        list-style: none;
        margin: 0px; 
        padding: 0px;
    }


    a, a:visited {
        color: var(--lucyBlue);
        cursor: pointer;   
        text-decoration: none; 
    }

    a:hover, a:active{
        color: #388b98;
        transition: color 0.5s;

    }

    input, button {
        font-family: Roboto Arial, Helvetica, sans-serif;
        font-weight: 400;
    }



    html, body, #__next {
        width: 100%;
        height: 100%;
        background-color: var(--bgWhite);
    }

`;
