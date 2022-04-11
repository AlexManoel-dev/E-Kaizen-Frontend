import { createGlobalStyle, css } from "styled-components";

export default createGlobalStyle`
    :root{
        --black-color: #363636;
        --green-color: #228B22;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        /* font-weight: bolder; */
    }
    body{
        font-family: Arial, sans-serif;
    }
`;