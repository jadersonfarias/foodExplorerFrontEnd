import { A11y, Navigation, Pagination } from 'swiper/modules'; // acessibilidade , navigation setas , 
import 'swiper/css';// estilos css
import 'swiper/css/navigation';    // estilos css
import 'swiper/css/pagination';// estilos css
import 'swiper/swiper-bundle.css';
import { Swiper } from 'swiper/react';
import { Container } from './styles';


export function Slider({ children, ...rest }) {
  return (
    <Container {...rest}>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
         spaceBetween={30}
         slidesPerView={1}
        navigation={{ clickable: true  }} 
        pagination={{ clickable: true }}
        loop={true} //faz os pratos rodar em loop
    breakpoints={{
           0: {
             slidesPerView: 1,
             spaceBetween: 10,
           },
           480: {
           slidesPerView: 2,
              spaceBetween: 120,
          },
          768: {
              slidesPerView: 3,
            spaceBetween: 120
           },
          1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            }
        }}
       >
        {children}
      </Swiper>
    </Container >
  )
}