import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import { Export } from "@phosphor-icons/react";

export const Container = styled.aside`
   position: fixed;
   display: flex;
   flex-direction: column;

    height: 100vh;
    width: 100%;
  
    transform: translate(-200%);
    transition: transform 0.3s ease-in-out;;

  
    z-index: 55;

 

  &[data-menu-is-open="true"] {
   transform: translate(0); 

  }
  

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
   
  }
`;

export const MenuHeader = styled.header`
  height: 11.4rem;
  display: flex;
  align-items: center;
  

 
  background-color: ${({ theme }) => theme.COLORS.DARK["600"]};

   button {
    background: none;
    border: none;
    font-size: 2.1rem;
    padding-right: 59rem;
    }
   svg {
     font-size: 4.8rem;
   }
    h1 {
      font-size: 2.4rem;
    }

    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};

  
`;

export const ButtonMenu = styled.button`
      display: flex;
      align-items: center;
      gap: .8rem;
      
      margin-left: 4rem;
      
      svg{
        font-size: 2.8rem;
      }

      h1 {
        font-family: Roboto;
        font-size: 2.0rem;
      }

      color: ${({theme}) => theme.COLORS.LIGHT["100"]};
`

export const Main = styled.main`
  flex: 1;  
 
 
  background-color: ${({ theme }) => theme.COLORS.DARK["500"]};
`;

export const MainContent = styled.div`
  padding-top: 3.6rem;
  width: 67.0rem;
  margin: auto;

`

export const Nav = styled.nav`
    display: flex; 
    flex-direction: column;
    gap: 1.8rem;

   :nth-child(1) {
    margin-top: 3.6rem;
  }

  a {
    font-size: 2.4rem;
    color: white;
    border-bottom: 0.1rem solid ${({ theme }) => theme.COLORS.DARK["1000"]};
  } 
`;
