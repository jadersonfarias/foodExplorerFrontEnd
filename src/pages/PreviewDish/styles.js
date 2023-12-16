import styled from "styled-components";

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
  grid-area: content;
  padding: 1.6rem 5.6rem 3.3rem;


  section {
    

    img {
      width: 26.3rem;
      height: 26.3rem;
    }
  }
  
  
`