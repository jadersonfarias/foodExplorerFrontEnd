import styled from "styled-components";
import { Button } from "../../components/Button";

export const Container = styled.div`
     height: 100vh;
     display: grid;
     grid-template-rows: 10.4rem auto 7.7rem;
     grid-template-areas: 
    "header"
    "content"
    "footer";

    

`

export const Content = styled.div`
  width: 80.0rem;
  grid-area: content;
  padding:  5.6rem ;

  

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

.container {
   
}
  section {
    display: flex;
  align-items: center;


    img {
      width: 26.3rem;
      height: 26.3rem;
    }
  }
  
  
`

export const ButtonCard = styled(Button)`
  background: ${({theme}) => theme.COLORS.TOMATO['100']};
  padding: 2.4rem;



  
`