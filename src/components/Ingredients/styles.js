import styled from "styled-components";

export const Container = styled.div`
  padding: 0.5rem;
  border-radius: 0.5rem;
  
  display: flex;
  align-items: center;
  gap: .8rem;
  margin: .2rem;


  background-color: ${({ theme, isNew }) =>
    isNew ? "transparent" : theme.COLORS.LIGHT["600"]};
  color: ${({ theme, isNew }) =>
    isNew ? theme.COLORS.LIGHT["500"] : theme.COLORS.LIGHT["100"]};

  border: ${({ theme, isNew }) =>
    isNew ? `2px dashed ${theme.COLORS.LIGHT["500"]}` : "none"};

  > input {
    display: flex;
    align-items: center;
    max-width: 8.0rem;
    max-height: 2.8rem;
  

    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
    font-size: 1.4rem;
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme, isNew }) =>
        isNew ? theme.COLORS.LIGHT["500"] : theme.COLORS.LIGHT["100"]};
      font-size: 1.6rem;
    }
  }

  > button {
    background: none;
    border: none;


    > svg {
      width: 100%;
      background:transparent;
      margin-top:0.3rem;
      color: ${({ theme, isNew }) =>
        !isNew
          ? `${theme.COLORS.LIGHT["100"]}`
          : `${theme.COLORS.LIGHT["500"]}`};

      &:hover {
        color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
      }
    }
  }
`;
