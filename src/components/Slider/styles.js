import styled from "styled-components";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
 .swiper {
  padding: 32px;
 }

 .swiper-button-custom {
    width: 40px;
    height: 40px;
 }

 .swiper-slide {
  display: flex;
  justify-content: center;
 
 
 }

 .swiper-pagination-bullet-active {   
  display: none;

 
 }

 .swiper-pagination-bullet {  
  display: block;

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