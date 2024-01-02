import styled from "styled-components";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
`;

export const Content = styled.div`
  grid-area: content;
  padding: 5.6rem;
  margin: 0 12.1rem;
  position: relative;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0 10.1rem;
    section {
      display: flex;
      flex-direction: column;
      text-align: justify;
    }
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    section {
       img {
        width: 21.3rem;
        height: 21.3rem;
      }
    }

    .container {
      h1 {
        text-align: center;
      }
    }
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

  .container {
    margin-left: 4.3rem;

    > p {
      margin: 2.4rem 0 2.4rem 0;
    }
  }
  section {
    display: flex;
    align-items: center;

    .ingredient-tag {
      display: flex;
      align-items: start;

      gap: 0.9rem;
      margin-bottom: 4.8rem;
    }

   > img {
      width: 26.3rem;
      height: 26.3rem;
    }
  }
`;

export const ButtonCard = styled(Button)`
  background: ${({ theme }) => theme.COLORS.TOMATO["100"]};
  width: 16.2rem;
  height: 4.8rem;
`;

export const Button_back = styled(ButtonText)`
  position: absolute;
  top: 1.5rem;
`;
