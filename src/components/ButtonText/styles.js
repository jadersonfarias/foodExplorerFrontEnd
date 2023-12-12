import styled from "styled-components";

export const Container = styled.button`   
  color: ${({ theme }) => theme.COLORS.LIGHT['100']};
  font-family: Poppins;
  background: none;  

  
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;  
  gap: .8rem;  
    
  border: 0;
  
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem; 
  text-align: center;


  > svg {
    gap: .8rem
  } `