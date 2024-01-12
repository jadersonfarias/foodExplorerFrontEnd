import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.aside`
   position: fixed;
   display: flex;
   justify-content: space-between;
   flex-direction: column;
   
   width: 100%;
   min-height: 100vh;
  
    transform: translate(-200%);
    transition: transform 0.3s ease-in-out;;


 
  position: absolute;
  z-index: 99;

 

  &[data-menu-is-open="true"] {
   transform: translate(0); 

  }
  

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
   
  }
`;

export const Header = styled.header`
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
  flex: 1;
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
