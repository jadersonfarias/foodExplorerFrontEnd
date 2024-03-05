import styled from "styled-components";
import{ DEVICE_BREAKPOINTS } from"../../styles/deviceBreakpoints"


export const Container = styled.div`
    height: 100vh;
    display: flex;
    gap: 35.0rem;

    align-items: center;
    justify-content: center;


    @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
            margin: 9rem auto;
            flex-direction: column;
            gap: 4rem;  
    }
    
    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
        margin: 0 auto 0;

    } 


`
export const LogoAuth = styled.div`
     display: flex;
     align-items: center;
     gap: 2rem;

    font-family: Roboto;
    font-size: 3.0rem;



`

export const Form = styled.form` 

    padding: 6.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK['700']};
    border-radius: .8rem;

    display: flex;
    flex-direction: column;
    justify-content: center;


    gap: .5rem;

    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
           background-color:transparent;
           align-items: center;
           padding: 3.0rem 0;
         

    }


      
  .labels {
    display: flex;
    margin-bottom: 1.5rem;
    font-size: 1.6rem;
  }

    > h1 {
        text-align: center;
        margin-bottom: 1.4rem;
        font-family: Poppins;
        font-size: 3.2rem;
        font-weight: 500;
    }

    > a {
        margin-top: 1.2rem;
        color: ${({theme}) => theme.COLORS.LIGHT['100']};
        text-align: center;
    }
    

    `;