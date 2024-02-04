import styled from "styled-components";
import { Button } from "../../components/Button"
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

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
  }

`
export const Form = styled.form`
  max-width: 112rem;
  margin: 4rem auto 11.6rem;
  @media(max-width: ${DEVICE_BREAKPOINTS.LG}){
       width: 85rem;
  }

  @media(max-width: ${DEVICE_BREAKPOINTS.MD}){
    width: 55.6rem;
    section{
        display: flex;
        flex-direction: column;
    }

    @media(max-width: ${DEVICE_BREAKPOINTS.SM}){
       max-width: 45rem;
  }

    .buttons {
       button{
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
      color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
      padding: 1.6rem;
      border-radius: 5px;
      font-size: 1.6rem;

      border: none;
      outline: 0;
      box-shadow: none;

      cursor: pointer;
      transition: filter 0.2s;
    }
  }
.buttons {
    display: flex;
    justify-content: end;
    gap : 2.1rem;

    :nth-child(1){
        background-color: ${({theme}) => theme.COLORS.DARK['800']};

    }

    > button {
      margin-top: 3.2rem;
      background-color: ${({ theme }) => theme.COLORS.TOMATO["400"]};
      color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
      border: none;
    
      padding: 1.2rem 2.4rem;
      border-radius: 0.8rem;
    }
}

  .col-2 {
      display: flex;
      align-items: center;
      
    .ingredients {
      display: flex;
      align-items: center;

      border-radius: 0.6rem;

      padding: 0.2rem 0.8rem;
      gap: 1.6rem;

      width: 100%;
      height: auto;
      background-color: ${({ theme }) => theme.COLORS.DARK["800"]};
    }
  
  }
`;

export const ButtonPageNewDish = styled(Button)`  
  margin: 2rem 0 .3rem;
  background-color: ${({ theme }) => theme.COLORS.TOMATO['400']};

  width: 100%;

  /* :nth-child(1) {
    background-color: ${({ theme }) => theme.COLORS.DARK['800']};
    transition: background-color 0.3s;
  } */

  :nth-child(1):hover {
    background-color: ${({ theme }) => theme.COLORS.TOMATO['100']};
    animation: pulse 1s infinite;
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }  


  `