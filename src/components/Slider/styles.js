import styled from "styled-components";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
box-shadow: inset 0px 0px 30px 30px rgba(0,0,0,0.9) ;
 .swiper {
  padding: 32px;
 }



 .swiper-slide {
  display: flex;
  justify-content: center;
 
 
 }

 .swiper-pagination-bullet-active {   
  display: none;

 
 }

 .swiper-pagination-bullet {  
  display: none;

 }

 .swiper-button-prev {  
   color: ${({ theme }) => theme.COLORS.LIGHT['100']};    
   display: block;
 
  
 }

 .swiper-button-next { 
    color: ${({ theme }) => theme.COLORS.LIGHT['100']};    
   display:block;
 }

 
  `