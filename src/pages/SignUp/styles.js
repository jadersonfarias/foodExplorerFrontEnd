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

`

export const Form = styled.form`
    width: 44.0rem;
    height: 49.0rem;
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
           margin-left:2.5rem;

           width: 47.6rem;

    }


      
  .labels {
    display: flex;
    margin-bottom: .5rem;
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