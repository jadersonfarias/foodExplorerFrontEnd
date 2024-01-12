import styled from "styled-components";
import { Button } from "../Button";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  max-width: 21.5rem;
  height: 33rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.DARK['300']};
 
  margin-left: 5rem;
  padding: 2.1rem;
  border-radius: .3rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 29rem;
    height: 30.0rem;

    text-align: center;
   
  > h2{
        font-size:1rem;
        line-height: 2.4rem;
    } 
  


     .hidden {
      display: none;
    }  



    .like {
       
        svg {
        font-size: 2.4rem;
      }
    }

    .bottom-card {
        width: 100%;   
        display: flex;
        flex-direction: column; 
    }
  }



> h2 {
    width: 100%;
    font-size: 1.6rem;
    line-height: 2.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT["300"]};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  > p {
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT["400"]};
  }

  > span {
    padding: 1rem 0px;
    color: ${({ theme }) => theme.COLORS.CAKE["200"]};
    font-family: Roboto;
    font-size: 2.8rem;
    font-weight: 400;
  }

  > img {
    max-width: 8.8rem;
  }

  .like {
    position: absolute;
    right: 0.9rem;
    top: 1rem;
  }

  .bottom-card {
    display: flex;
    align-items: center;
    gap: 2.4rem;
  }

  .amount {
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 2.2rem;
    }

    gap: 1.4rem;
  }
`;

export const ButtonCard = styled(Button)`
  width: 7.2rem;
  height: 3.8rem;
  background: ${({ theme }) => theme.COLORS.TOMATO["100"]};
  
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
  }
`;
