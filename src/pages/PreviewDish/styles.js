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
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 8rem 4rem;
  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;

    padding: 8rem 5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    padding: 6rem 5rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    padding: 6rem 0;
  }
`;

export const MainContent = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7rem;

  position: relative;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    flex-direction: column;

    text-align: center;

    gap: 0;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    padding: 1rem 0;
  }
`;

export const MainImage = styled.img`
  display: block;
  max-width: 35rem;
  border-radius: 50%;

  overflow-clip-margin: content-box;
  overflow: clip;

  transition: transform 1.8s ease-in-out;

  &:hover {
    transform: rotate(65deg);
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-height: 25rem;
    max-width: 25rem;
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
    gap: 1.5rem;
    flex-wrap: wrap;
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
    .ingredient {
    }

    .ingredient-tag {
      justify-content: center;
      padding: 0 2rem;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 100%;
    h1 {
      font-size: 2rem;
    }
    .ingredient-tag {
      justify-content: center;
    }
  }
`;
export const ButtonCard = styled(Button)`
  background: ${({ theme }) => theme.COLORS.TOMATO["100"]};
  width: 35%;
  height: 3.8rem;



  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    width: 100%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.XL}) {
    width: 45%;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    width: 16.0rem;
  }
`;

export const Button_back = styled(ButtonText)`
  font-size: 3.5rem;
  position: absolute;
  left: -1rem;
  top: -3.5rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    font-size: 3rem;
    top: -3rem;
    left: 3rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.SM}) {
    font-size: 2rem;
    top: -4rem;
    left: -2rem;
  }
  @media (max-width: ${DEVICE_BREAKPOINTS.XS}) {
    top: -4rem;
    left: -2rem;
  }
`;
