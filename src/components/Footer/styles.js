import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
   // grid-area: footer;
    min-height: 7.7rem;
    display: flex;
    align-items: center;
    justify-content: center;
 
    gap: 50.0rem;
    background: ${({ theme }) => theme.COLORS.DARK['700']};

    @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
        gap: 30.0rem;
    };

    
    @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        gap: 9.3rem;
    };

    @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        gap: 4.3rem;
        padding-left:3.3rem ;
    };




`

export const LogoContainer = styled.div`
        display: flex;
        align-items: center;
        gap: 1rem;
        color: ${({theme}) => theme.COLORS.LIGHT['700']};

        font-size: 1rem;
        font-weight: 700;


     

`