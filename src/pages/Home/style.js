import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
   

    display: grid;
    grid-template-rows: 10.4rem auto;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    > main {
        grid-area: content;
        overflow-y: scroll;
        
    }
            
`


export const Content = styled.div`
        //background-color: red;
        max-width: 112.2rem;
        margin: 0 auto;

        display: flex;
        flex-direction: column;

        > header {
            display: flex;
            align-items: center;
            img {
                width: 63.1rem;
            }
        }
`

export const Footer = styled.footer`
    width: 100%;
    height: 7.7rem;
`

