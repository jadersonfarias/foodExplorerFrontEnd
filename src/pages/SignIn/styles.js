import styled from "styled-components";


export const Container = styled.div`
    height: 100vh;
    display: flex;
    gap: 34.0rem;

    align-items: center;
    justify-content: center;

    margin: auto;

`

export const Form = styled.form`
    width: 47.0rem;
    height: 49.0rem;
    padding: 6.4rem;

    background-color: ${({theme}) => theme.COLORS.DARK['700']};

    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: .8rem;

    gap: 1.2rem;


      
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