import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
 
`;

export const Main = styled.main`
  flex: 1;
  
`;

export const BannerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin: auto;


  width: 90%;
  height: 26rem;
 
  background: ${({ theme }) => theme.COLORS.GRADIENT['200']};

  margin-top: 16.2rem;
  border-radius: 0.8rem;

  position: relative;

  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}){
    height: 20rem;

   
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
    height: 16rem;

   
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
      margin-top: 6.8rem;
      height: 13rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
    margin-top: 5.2rem;
    height: 11rem;
  }
`;

export const MainContent = styled.div`
  margin: auto;
  width: 90%;
  position: relative;
  background: linear-gradient(to right, black, transparent 40%, transparent 40%, black);



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

    bottom: -.8rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
      max-width: 40.0rem;
      max-height: 50.0rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
       max-width: 25rem;
       max-height: 18.9rem;

      bottom: -.6rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
      width: 17.1rem;      
      height: 12.9rem;

      bottom: -.5rem;
      left: -2rem;

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
    font-size: 3.5rem;
    font-weight: 500;
    line-height: 5.6rem;
  }

  p {
    font-family: Roboto;
    font-size: 1.6rem;
  }

  
  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    position: absolute;
     left: 50rem;
  }
  
   @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      position: absolute;
      left: 42rem;

    h1 {
      font-size: 1.8rem;
    }

    p {
      
      font-size: 1.2rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}){
      position: absolute;
      left: 20rem;

      h1 {
      font-size: 1.2rem;
    }

    p {
      
      font-size: .9rem;
    }
    }

    @media (max-width: ${DEVICE_BREAKPOINTS.XS}){
      position: absolute;
      left: 16.5rem;
      h1 {
      font-size: 1rem;
    }

    p {
      font-size: .8rem;
    }
  }

`;
