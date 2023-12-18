import { Container, Content, ButtonCard, Button_back } from "./styles";
import { IoIosArrowBack } from "react-icons/io";

import salada from "../../assets/salada.png";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";

export function PreviewDish() {
  return (
    <Container>
      <Header />
      <Content>
        <Button_back >
          <IoIosArrowBack />
          <h1>Voltar</h1>
        </Button_back>
        <section>
          <img src={salada} alt="salada" />
          <div className="container">
            <h1>Salada Ravanello</h1>
            <p>
              Rabanetes, folhas verdes e molho agridoce salpicados com gergelim.
              O pão naan dá um toque especial.
            </p>

            <div className="ingredient-tag">
              <Ingredient title="alface" />
              <Ingredient title="alface" />
            </div>

            <div className="bottom-card">
              <div className="amount">
                <ButtonText icon={FiMinus} />
                <p>01</p>
                <ButtonText icon={GoPlus} />
              </div>
              <ButtonCard title="INCLUIR" />
            </div>
          </div>
        </section>
      </Content>
      <Footer />
    </Container>
  );
}
