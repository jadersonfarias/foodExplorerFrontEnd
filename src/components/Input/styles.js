import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;


  background-color: ${({ theme }) => theme.COLORS.DARK["900"]};
  color: ${({ theme }) => theme.COLORS.LIGHT["500"]};

  border-radius: 0.5rem;
  margin-bottom: 0.8rem;

  > Input {
    
    height: 4.8rem;
    width: 100%;

    padding: 1.6rem;

    color: ${({ theme }) => theme.COLORS.LIGHT['100']};
    background: transparent;
    border: 0;

    font-size: 1.6rem;
    font-weight: 400;    

    &:placeholder{
        
        color: ${({ theme }) => theme.COLORS.LIGHT["500"]};
    }

  
  }
  > svg {
       margin-left: 13rem;
    }
`;
