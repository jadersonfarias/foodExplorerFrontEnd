import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.button`   
  color: ${({ theme }) => theme.COLORS.LIGHT['100']};
  font-family: Poppins;
  background: none;  
  z-index: 1;

  
  display: flex;
  align-items: center;  
  gap: .8rem;  
    
  border: 0;
  
  font-size: 2.0rem;
  font-weight: 500;
  line-height: 2.4rem; 
  text-align: center;


  > svg {
    gap: .8rem
  } `