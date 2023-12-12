import { Container, Content } from "./style";
import { Dishes } from "../../components/Dishes";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Footer } from "../../components/Footer";
import homeBanner from "../../assets/home-banner.png";

import { Swiper, SwiperSlide } from "swiper/react";

export function Home() {
  return (
    <Container>
      <Header />
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
          <Section title="Refeições">
            <Swiper
              slidesPerView={1}
              pagination={{ clickable: true }}
              navigation
            >
              <SwiperSlide>
                <Dishes
                  data={{
                    title: "Torradas de Parma",
                    description:
                      "Presunto de parma e rúcula em um pão com fermentação natural.",
                    rating: "25,88",
                  }}
                />

                {/* <Dishes
                data={{
                  title: "Torradas de Parma",
                  description:
                    "Presunto de parma e rúcula em um pão com fermentação natural.",
                  rating: "25,88",
                }}
              /> */}
              </SwiperSlide>
            </Swiper>
          </Section>
        </Content>
      </main>
      <Footer/>
    </Container>
  );
}
