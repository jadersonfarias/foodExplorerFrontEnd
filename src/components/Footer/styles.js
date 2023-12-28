import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints"

export const Container = styled.div`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    //padding: 0 12.3rem 0 12.3rem ;
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

export const Logo = styled.div`
        display: flex;
        gap: 1rem;
        color: ${({theme}) => theme.COLORS.LIGHT['700']};

        font-size: 1rem;
        font-weight: 700;

        > img {
            width: 2rem;
            color: ${({theme}) => theme.COLORS.LIGHT['700']};
        }

     

`