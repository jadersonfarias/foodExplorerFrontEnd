import styled from"styled-components"


export const Container = styled.div`
    grid-area: header;
    height: 10.4rem;
    width: 100%;
    padding: 2.4rem 10.3rem;

    background-color: ${({ theme }) => theme.COLORS.DARK['600']};
    
    display: flex;
    align-items: center;
 
    justify-content: space-between;
    
    `

export const Search = styled.div`
    width: 50.0rem;
    margin-top: 1rem;

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
        display: flex;
        align-items: center;
     
        justify-content: center;
    
        margin-bottom: .8rem;
  

`
export const Logout = styled.button`
     border: none;
     background: none;
     margin-bottom: .5rem;


`