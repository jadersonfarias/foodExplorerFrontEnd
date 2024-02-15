import styled from "styled-components";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  overflow: visible;
  
  .swiper {
    overflow: hidden;
   
  }

  .swiper-slide {
    z-index: 0;
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
    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
    display: block;
  }

  .swiper-button-next {
    color: ${({ theme }) => theme.COLORS.LIGHT["100"]};
    display: block;
  }
`;
