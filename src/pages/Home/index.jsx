import { Container, Content, Footer } from "./style";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import homeBanner from "../../assets/home-banner.png";


export function Home() {
  return (
    <Container>
      <Header/>
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
          <Section title="number 1">
                <h1>number</h1>
          </Section>
          
        </Content>
      </main>
      <Footer>

      </Footer>
    </Container>
  );
}
