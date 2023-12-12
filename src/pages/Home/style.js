import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
   

    display: grid;
    grid-template-rows: 10.4rem auto 7.7rem;
    grid-template-areas: 
    "header"
    "content"
    "footer";

    > main {
        padding-top: 13.2rem;
        grid-area: content;
        overflow-y: scroll;       

        width: 100vw;
    }

    /* .slide-item{
        width: 100%;
        height: 350px;
    } */
            
`


export const Content = styled.div`
        //background-color: red;
        max-width: 112.2rem;

         margin: 0 auto;

        display: flex;
        flex-direction: column;

        > header {
            height: 26.0rem;
            border-radius: .8rem;
            display: flex;
            align-items: center;
            position: relative;
         
            background: ${({ theme }) => theme.COLORS.GRADIENT['200']};
            img {
                width: 63.2rem;
                height: 40.6rem;

                position: absolute;
                left: -4rem;
                bottom: -1rem;
            }


            div {
                width: 43.2rem;
                position: absolute;
                top: 7.6rem;
                right: 11rem;
            

          

          h1 {
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 4.0rem;
            line-height: 140%;

            margin-bottom: 0.3rem;
          }

          p {
            font-size: 1.6rem;
            line-height: 140%;
          }
        }
    }
`



