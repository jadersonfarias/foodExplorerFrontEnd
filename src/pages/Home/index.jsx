import { Container, Content } from "./style";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import { Slider } from "../../components/Slider";
import { Menu } from "../../components/Menu";

import { useState, useEffect } from "react";
import { api } from "../../services/api";
import { useGlobalStates } from "../../hooks/globalStates";

import homeBanner from "../../assets/home-banner.png";

import { SwiperSlide } from "swiper/react";

export function Home() {
  const { dishes, setDishes } = useGlobalStates();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  useEffect(() => {
    async function fetchDishes() {
      const res = await api.get(`/dishes`);
      console.log(res.data);
      setDishes(res.data);
    }

    fetchDishes();
  }, []);

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
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

          {dishes.filter((dish) => dish.category === "Refeições").length >
            0 && (
            <Section title="Refeições">
              <Slider>
                {dishes
                  .filter((dish) => dish.category === "Refeições")
                  .map((meal, index) => (
                    <SwiperSlide key={index}>
                      <Card data={meal} />
                    </SwiperSlide>
                  ))}
              </Slider>
            </Section>
          )}

          {/* <Section title="Sobremesas">
              <Slider>
              <SwiperSlide>
                  <Card
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
                  <Card
                    data={{
                      title: "Torradas de Parma",
                      description:
                        "Presunto de parma e rúcula em um pão com fermentação natural.",
                      rating: "25,88",
                    }}
                  /> 
                </SwiperSlide>            
              </Slider>
            </Section> */}
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

{
  /* <SwiperSlide>
                  <Dishes
                    data={{
                      title: "Torradas de Parma",
                      description:
                        "Presunto de parma e rúcula em um pão com fermentação natural.",
                      rating: "25,88",
                    }}
                  />
                </SwiperSlide> */
}
