import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Main = styled.main`
  flex: 1;
`;

export const BannerContainer = styled.div`
    display: flex;
    justify-content: space-between;

    width: 80%;
    height: 26.0rem;
    background-color: ${({theme}) => theme.COLORS.DARK["400"]};

    margin: auto;
    margin-top: 16.2rem;
    border-radius: .8rem;

    position: relative;

`

export const MainContent = styled.div`
        margin : auto;
        width: 80%;
`


export const BannerImage = styled.img`
        display: block;
        max-width: 60.0rem;
        max-height: 40.0rem;

        position: absolute;
        bottom: -1rem;
        left: -6rem;


`

export const BannerContent = styled.div`
      display: flex;
      flex-direction: column;

      justify-content: center;
      height: 100%;
      width: 50%;

      h1 {
        font-family: Poppins;
        font-size: 4.0rem;
        font-weight: 500;
        line-height: 5.6rem;
      }

      p {
        font-family: Roboto;
        font-size: 1.6rem;
     
      }
      
`