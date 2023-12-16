import styled from "styled-components";

export const Container = styled.span`
    background-color: ${({theme}) => theme.COLORS.DARK['1000']};
    color: ${({theme}) => theme.COLORS.LIGHT['100']};
    
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2.4rem; 

    margin-left: .8rem;
    padding:.2rem;
    border-radius: .5rem;
`