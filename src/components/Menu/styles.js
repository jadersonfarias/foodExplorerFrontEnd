import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
   position: fixed;
   display: grid;
   
   width: 100%;
   height: 100vh;
   grid-template-rows: 10.4rem auto 7.7rem;
   grid-template-areas:
    "header"
    "content"
    "footer"; 
    transform: translate(-200%);
    transition: transform 0.3s ease-in-out;;


 
  position: absolute;
  z-index: 10;

 

  &[data-menu-is-open="true"] {
   transform: translate(0); 

  }
  

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-columns: 54rem;
  }
`;

export const Header = styled.header`
  grid-area: header;
  display: flex;
  align-items: end;

  padding: 0 2.8rem 2.8rem;

  background-color: ${({ theme }) => theme.COLORS.DARK["600"]};

  > button {
    background: none;
    border: none;
    position: relative;

   > h1 {
      margin-left: 3rem;
      font-size: 2.4rem;
    }
svg{
  font-size: 2.4rem;
  position: absolute;
  left: 0.4rem;
  top: 0.3rem;
}

    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};

  }
`;

export const Content = styled.div`
  grid-area: content;
  padding: 3.2rem 3.2rem 0 3.2rem;
  background-color: ${({ theme }) => theme.COLORS.DARK["500"]};
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  font-family: poppins;
  font-size: 2.4rem;
  font-weight: 300;

  :nth-child(1) {
    margin-top: 3.6rem;
  }

  a {
    color: white;
    border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.DARK["1000"]};
  }
`;
