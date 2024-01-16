import styled from "styled-components";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Container = styled.div`
 .swiper {
  padding: .2rem;
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
  display: block;

 
 }

 .swiper-pagination-bullet {  
  display: block;

 }

 .swiper-button-prev {  
   color: ${({ theme }) => theme.COLORS.LIGHT['300']};    
   display: block;

  
 }

 .swiper-button-next { 
    color: ${({ theme }) => theme.COLORS.LIGHT['300']};    
   display:block;
 }
  `