import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100vh;
  grid-template-rows: 9.4rem 100vh 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

    display: none;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    grid-template-columns: 54rem;
  }
`;

export const Header = styled.div`
  grid-area: header;
  display: flex;
  align-items: end;

  padding: 0 2.8rem 2.8rem;
  

  background-color: ${({ theme }) => theme.COLORS.DARK["600"]};
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
    border-bottom: .1rem solid ${({ theme }) => theme.COLORS.DARK['1000']};
  }
`;
