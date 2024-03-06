import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
import Vector from "../../assets/Vector.svg";

export const Container = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 10.4rem auto 7.7rem;
  grid-template-areas:
    "header"
    "content"
    "footer";

  main {
    grid-area: content;
    flex-direction: column;
  }
`;

export const Form = styled.form`
  max-width: 112rem;
  margin: 4rem auto 11.6rem;

  @media (max-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 85rem;
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    max-width: 50.6rem;
    section {
      display: flex;
      flex-direction: column;
    }

    .buttons {
      button {
        width: 100%;
      }
    }
  }

  header {
    > h1 {
      font-family: Poppins;
      font-size: 3.2rem;
      font-weight: 500;

      margin: 1.2rem 0 3.2rem;
    }
  }

  label {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    font-size: 1.6rem;
    line-height: 100%;
    width: 100%;

    cursor: pointer;

    gap: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT["300"]};
  }

  section {
    display: flex;
    justify-content: center;
    gap: 3.2rem;
  }

  .col-1 {
    .image {
      display: flex;
      align-items: center;
      cursor: pointer;
      border-radius: 10px;
      background-color: ${({ theme }) => theme.COLORS.DARK["800"]};
      color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
      gap: 0.8rem;

      input {
        color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
        height: 4.8rem;
      }

      svg {
        color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
        margin-left: 2.2rem;
        width: 2.4rem;
        height: 2.4rem;
      }
    }

    input::-webkit-file-upload-button,
    input::file-selector-button {
      display: none;
    }

    input[type="file"] {
      opacity: 0;
      cursor: pointer;
      width: 0;
    }

    select {
      background-color: ${({ theme }) => theme.COLORS.DARK["800"]};

      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -moz-appearance: none;
      -webkit-appearance: none;
      appearance: none;

      color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
      padding: 1.6rem;
      border-radius: 5px;
      font-size: 1.6rem;

      border: none;
      outline: 0;
      box-shadow: none;

      cursor: pointer;
      transition: filter 0.3s;
    }

    .arrowDown {
      transform: scale(3.3px);
      background-image: url(${Vector});
      background-repeat: no-repeat;
      background-position: 95%;
    
    }
  }

  .col-2 {
    .ingredients {
      padding: 0.4rem;
      display: flex;

      border-radius: 0.6rem;

      padding: 0.3rem 0.8rem;
      gap: 1rem;

      width: 100%;
      height: 49%;
      background-color: ${({ theme }) => theme.COLORS.DARK["800"]};

   
    }
  }

  > Button {
    margin-top: 4rem;
    padding: 3rem;
  }
`;

export const Button_back = styled.button`
  display: flex;
  align-items: center;

  background-color: transparent;
  border: none;

  > svg {
    font-size: 3.2rem;
  }

  font-size: 2rem;
  color: white;
`;
