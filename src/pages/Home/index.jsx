import { Container, Content } from "./style";
import { Dishes } from "../../components/Dishes";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { Menu } from "../../components/Menu";

import { useState } from "react";

import homeBanner from "../../assets/home-banner.png";

import { SwiperSlide } from "swiper/react";

export function Home() {
  const [ menuIsOpen, setMenuIsOpen ] = useState(false);

  // const data = [
  //   { id: "1", Image: homeBanner },
  //   { id: "2", Image: homeBanner },
  //   { id: "3", Image: homeBanner },
  //   { id: "4", Image: homeBanner },
  // ];
  return (
    <Container>
      <Menu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <main>
        <Content>
          <header>
            <img
              src={homeBanner}
              alt="Macarons coloridos em tons pastel despencando juntamente com folhas verdes e frutas frescas."
            />

            <div>
              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
            </div>
          </header>

            <Section title="refeições">
              <Slider>
              <SwiperSlide>
                  <Dishes
                    data={{
                      title: "Torradas de Parma",
                      description:
                        "Presunto de parma e rúcula em um pão com fermentação natural.",
                      rating: "25,88",
                    }}
                  /> 
                </SwiperSlide>            
              </Slider>
            </Section>

            <Section title="Sobremesas">
              <Slider>
              <SwiperSlide>
                  <Dishes
                    data={{
                      title: "Torradas de Parma",
                      description:
                        "Presunto de parma e rúcula em um pão com fermentação natural.",
                      rating: "25,88",
                    }}
                  /> 
                </SwiperSlide>            
              </Slider>
            </Section>

            <Section title="Bebidas">
              <Slider>
              <SwiperSlide>
                  <Dishes
                    data={{
                      title: "Torradas de Parma",
                      description:
                        "Presunto de parma e rúcula em um pão com fermentação natural.",
                      rating: "25,88",
                    }}
                  /> 
                </SwiperSlide>            
              </Slider>
            </Section>
        
        </Content>
      </main>
      <Footer />
    </Container>
  );
}

{
  /* <Dishes
data={{
  title: "Torradas de Parma",
  description:
    "Presunto de parma e rúcula em um pão com fermentação natural.",
  rating: "25,88",
}} */
}

// {data.map((item) => (
//   <SwiperSlide key={item.id}>
//     <img src={item.Image}
//       alt="slider"
//       className="slide-item"
//       />
//   </SwiperSlide>
//  ))}


{/* <SwiperSlide>
                  <Dishes
                    data={{
                      title: "Torradas de Parma",
                      description:
                        "Presunto de parma e rúcula em um pão com fermentação natural.",
                      rating: "25,88",
                    }}
                  />
                </SwiperSlide> */}