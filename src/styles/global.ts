import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
        font-family: 'Space Mono', monospace,sans-serif;
    }

    body{
        background:${(props) => props.theme.colors.background};
        color: ${(props) => props.theme.colors.text};
        font-size: 15px;
        line-height: 25px;
     
        h1{
            font-size: 26px;
            line-height:38px;
        }
        h2{
            font-size: 22px;
            line-height: 33px;
        }
        h3{
            font-size: 16px;
            line-height: 24px;
        }
        h3{
            font-size: 13px;
            line-height: 20px;
        }
        
    }
`;
