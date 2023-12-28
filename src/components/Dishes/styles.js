import styled from "styled-components";
import { Button } from "../Button";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 30.5rem;
  height: 48rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
 
  margin-left: 5rem;
  padding: 0px 2.4rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 29rem;
    height: 40.0rem;

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
    font-size: 2.3rem;
    color: ${({ theme }) => theme.COLORS.LIGHT["300"]};
  }

  > p {
    width: 100%;
    font-size: 1.4rem;
    text-align: center;
    color: ${({ theme }) => theme.COLORS.LIGHT["400"]};
  }

  > span {
    padding: 1.2rem 0px;
    color: ${({ theme }) => theme.COLORS.CAKE["200"]};
    font-family: Roboto;
    font-size: 2.8rem;
    font-weight: 400;
  }

  > img {
    width: 17.6rem;
    height: 17.6rem;
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

    gap: 1.4rem;
  }
`;

export const ButtonCard = styled(Button)`
  background: ${({ theme }) => theme.COLORS.TOMATO["100"]};
  padding: 2.4rem;
`;
