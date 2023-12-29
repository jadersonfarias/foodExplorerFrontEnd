import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

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

    width: 100%;
  }

  .slide-item {
    width: 350px;
    height: 350px;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
         main {
            padding-top: 4.4rem;
        }

        
    }
`;

export const Content = styled.div`
  width: 112.2rem;

  background-color: ${({ theme }) => theme.COLORS.DARK['400']};

  margin: 0 auto;

  display: flex;
  flex-direction: column;
 



  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        width: 34.0rem;
        display: flex;
        align-items: center;
        
        > section {
    width: 57.8rem;
  }
       
  }

  > header {
    height: 26rem;
    border-radius: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: end;
    position: relative;
    
    

    background: ${({ theme }) => theme.COLORS.GRADIENT["200"]};
   > img {
      display: block;
      width: 63.2rem;
      height: 40.6rem;

      position: absolute;
      left: -4rem;
      bottom: -1rem;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: end;
        height: 12rem;
        margin-bottom: 4.2rem;
        
      h1 {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        font-size: 4rem;
        line-height: 140%;

        margin-bottom: 0.3rem;
        margin-right: 3rem;
      }

      p {
        font-size: 1.6rem;
        line-height: 140%;
      }
    }

    

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        height: 12.0rem;
        width: 57.6rem;
        
        img {
            height: 14.9rem;
            width: 21.0rem;

            left: -4rem;
            bottom: -.4rem;
        }

        div {

             margin-right: 3rem;

            h1 {
                font-size: 1.9rem;
            }

            p {
                font-size: 1.3rem;
            }
        }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
           
    }
  }


`;
