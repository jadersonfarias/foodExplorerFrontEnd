import styled from"styled-components"


export const Container = styled.div`
    grid-area: header;
    height: 10.4rem;
    width: 100%;
    padding: 2.4rem 12.3rem;

    background-color: ${({ theme }) => theme.COLORS.DARK['600']};
    
    display: flex;
    justify-content: space-between;
    
    `

export const Search = styled.div`

    width: 58.0rem;

`

export const Logo = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1rem;

        font-size: 1.2rem;
        font-weight: 700;

`
export const Request = styled.div`
        width: 21.6rem;
`