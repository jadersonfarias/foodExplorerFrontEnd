import styled from "styled-components";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
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

export const MainContent = styled.section`
  padding-top: 10.5rem;
  margin: 0 12.1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4rem;

  position: relative;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding-top: 7rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding-top:5.5rem;
    flex-direction: column;

    text-align: center;

    gap: 0;
  }
`;

export const MainImage = styled.img`
  display: block;
  max-height: 36rem;
  max-width: 36rem;


  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-height: 20rem;
    max-width: 20rem;
  }
`;
export const DishContent = styled.div`
  h1 {
    font-family: Poppins;
    font-size: 3rem;
    font-weight: 500;
    line-height: 5.6rem;
  }

  p {
    font-family: Poppins;
    font-size: 1.4rem;
    font-weight: 400;

    margin: 2.4rem 0;
  }

  .ingredient-tag {
    display: flex;
    gap: 1rem;
  }

  .bottom-card {
    display: flex;
    align-items: center;

    gap: 2.4rem;
    margin-top: 4.8rem;
  }

  .amount {
    display: flex;
    align-items: center;
    justify-content: center;

    gap: 1.4rem;
  }

  .container {
    > p {
      margin: 2.4rem 0 2.4rem 0;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    h1 {
      font-size: 2.7rem;
    }
    .bottom-card {
      margin: 3rem 0;
      justify-content: center;
    }

    .ingredient-tag {
        justify-content: center;
      }
}
  

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1 {
      font-size: 2.5rem;
    }
      .ingredient-tag {
        justify-content: center;
      }
}
`;
export const ButtonCard = styled(Button)`
  background: ${({ theme }) => theme.COLORS.TOMATO["100"]};
  max-width: 16.2rem;
  height: 3.8rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
  
}


`;

export const Button_back = styled(ButtonText)`
  position: absolute;
  left: -3.5rem;
  top: 2rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    top: 1rem;
    left: -5rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    top: 1rem;
    left: -12rem;
  }
`;
