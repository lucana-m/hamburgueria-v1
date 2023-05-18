import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');

    :root{
        --primary: #27AE60;
        --primary-50: #93D7AF;
        --secondary: #EB5757;

        --gray-100: #333333;
        --gray-50: #828282;
        --gray-20: #E0E0E0;
        --gray-0: #F5F5F5;

        --negative: #E60000;
        --warning: #FFCD07;
        --sucess: #168821;
        --information: #155BCB;

    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        width: 100%;
        font-family: "Inter", sans-serif;
    }

    main {
        width: 100%;
        height: max-content;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.25rem;
        padding: 0.9375rem;
    }

    button{
        cursor: pointer;
        border: none;
        background: transparent;
    }

    a{
        color: unset;
        text-decoration: none;
    }

    ul, ol, li{
        list-style: none;
    }

    input{
        outline: none;
        border: none;
        padding-left: 0.625rem;
    }

    @media (min-width: 900px){
        main{
            flex-direction: row;
            justify-content: center;
            align-items: flex-start;
            margin-top: 0.625rem;
            gap: 2.8125rem;
        }
    }
`;
