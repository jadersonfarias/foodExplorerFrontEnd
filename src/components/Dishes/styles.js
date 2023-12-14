import styled from "styled-components";
import { Button } from "../Button";


export const Container = styled.div`
    width: 24.7rem;
    height: 48.0rem;
    position: relative;
    

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    padding: 0px 2.4rem;


    > h2 {
        font-size: 2.4rem;
        color: ${({theme}) => theme.COLORS.LIGHT['300']}
    } 

    > p {
        width: 100%;
        font-size: 1.4rem;
        text-align: center;
        color: ${({theme}) => theme.COLORS.LIGHT['400']}
    
    }

    > span { 
        padding: 1.2rem 0px;
        color: ${({theme}) => theme.COLORS.CAKE['200']};
        font-family: Roboto;
        font-size: 3.2rem;
        font-weight: 400;
    }

    > img {
        width: 17.6rem;
        height: 17.6rem;
    }

.like {
    position: absolute;
    right: .9rem;
    top: 1rem;
}

.bottom-card{
    display: flex;
    align-items: center;
    gap: 2.4rem;
}

.amount {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.4rem;

}
    

`

export const ButtonCard = styled(Button)`
  background: ${({theme}) => theme.COLORS.TOMATO['100']};
  padding: 2.4rem;



  
`