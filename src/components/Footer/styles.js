import styled from "styled-components";

export const Container = styled.div`
    grid-area: footer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 69.0rem;
    background: ${({ theme }) => theme.COLORS.DARK['700']};

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