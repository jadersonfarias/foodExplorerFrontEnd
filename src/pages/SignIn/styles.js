import styled from "styled-components";
import{ DEVICE_BREAKPOINTS } from"../../styles/deviceBreakpoints"


export const Container = styled.div`
    height: 100vh;
    width: 100vw;


    display: flex;
    align-items: center;
    justify-content: center;
    gap: 34.0rem;


    @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
           margin: 9rem auto 0;
            flex-direction: column;
            gap: 4rem;  
    }
/* 
    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {


    } */

`

export const LogoAuth = styled.div`
     display: flex;
     align-items: center;
     gap: 2rem;

    font-family: Roboto;
    font-size: 3.5rem;



`

export const Form = styled.form`  
    padding:6.4rem;
 

    background-color: ${({theme}) => theme.COLORS.DARK['700']};

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: .8rem;

    gap: 1.2rem;


    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
           //height: 100vh;
           background-color:transparent;
           align-items: center;
           
       ;          
    }

   
      
  .labels {
    display: flex;
    margin-bottom: .8rem;
    font-size: 1.6rem;
  }

    > h1 {
        text-align: center;
        margin-bottom: 1rem;
        font-family: Poppins;
        font-size: 3.2rem;
        font-weight: 500;
    }

    > a {
        margin-top: 2.2rem;
        color: ${({theme}) => theme.COLORS.LIGHT['100']};
        text-align: center;
    }

    

    `;