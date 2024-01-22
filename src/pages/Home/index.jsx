import {
  Container,
  Main,
  BannerContainer,
  MainContent,
  BannerImage,
  BannerContent,
} from "./style";
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
      <Main>
        <BannerContainer>
          <div>
            <BannerImage
              src={homeBanner}
              alt="Macarons coloridos em tons pastel despencando juntamente com folhas verdes e frutas frescas."
            />
          </div>

          <BannerContent>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </BannerContent>
        </BannerContainer>
        <MainContent>
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

          {dishes.filter((dish) => dish.category === "Sobremesas").length >
            0 && (
            <Section title="Sobremesas">
              <Slider>
                {dishes
                  .filter((dish) => dish.category === "Sobremesas")
                  .map((meal, index) => (
                    <SwiperSlide key={index}>
                      <Card data={meal} />
                    </SwiperSlide>
                  ))}
              </Slider>
            </Section>
          )}

          {dishes.filter((dish) => dish.category === "Bebidas").length > 0 && (
            <Section title="Bebidas">
              <Slider>
                {dishes
                  .filter((dish) => dish.category === "Bebidas")
                  .map((meal, index) => (
                    <SwiperSlide key={index}>
                      <Card data={meal} />
                    </SwiperSlide>
                  ))}
              </Slider>
            </Section>
          )}
        </MainContent>
      </Main>
      <Footer/>
    </Container>
  );
}

{
  /* <main>
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

{dishes.filter((dish) => dish.category === "Sobremesas").length >
    0 && (
    <Section title="Sobremesas">
      <Slider>
        {dishes
          .filter((dish) => dish.category === "Sobremesas")
          .map((meal, index) => (
            <SwiperSlide key={index}>
                <Card data={meal} />
            </SwiperSlide>
          ))}
      </Slider>
    </Section>
  )}

{dishes.filter((dish) => dish.category === "Bebidas").length >
    0 && (
    <Section title="Bebidas">
      <Slider>
        {dishes
          .filter((dish) => dish.category === "Bebidas")
          .map((meal, index) => (
            <SwiperSlide key={index}>
                <Card data={meal} />
            </SwiperSlide>
          ))}
      </Slider>
    </Section>
  )}

  
</Content>
</main>
<Footer /> */
}
