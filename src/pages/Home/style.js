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


  width: 90%;
  height: 26rem;
  background-color: ${({ theme }) => theme.COLORS.DARK["400"]};

  margin: auto;
  margin-top: 16.2rem;
  border-radius: 0.8rem;

  position: relative;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    height: 18rem;
    width: 65%;

    gap: 44rem;
   
  }
`;

export const MainContent = styled.div`
  margin: auto;
  width: 80%;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
   
  }
`;

export const BannerImage = styled.img`
  display: block;
  max-width: 60rem;
  max-height: 40rem;

  position: absolute;
  bottom: -1rem;
  left: -6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 19.0rem;
    max-height: 14.9rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 40.0rem;
    max-height: 50.0rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
        width: 27rem;
        height: 18.9rem;
  }
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  height: 100%;
  width: 40%;

  h1 {
    font-family: Poppins;
    font-size: 4rem;
    font-weight: 500;
    line-height: 5.6rem;
  }

  p {
    font-family: Roboto;
    font-size: 1.6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    

    h1 {
      font-size: 1.8rem;
    }

    p {
      
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
    width: 100%;
  }
`;
