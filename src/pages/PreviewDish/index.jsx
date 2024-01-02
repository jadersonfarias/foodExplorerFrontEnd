import { Container, Content, ButtonCard, Button_back } from "./styles";
import { IoIosArrowBack } from "react-icons/io";

import salada from "../../assets/salada.png";
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { Menu } from "../../components/Menu";


export function PreviewDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  return (
    <Container>
      <Menu
      menuIsOpen={menuIsOpen}
      onCloseMenu={() => setMenuIsOpen(false)}
      />
      <Header onOpenMenu={() => setMenuIsOpen(true)}/>
      <Content>
        <Button_back title="voltar" icon={IoIosArrowBack} to="/" />
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
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
    </Container>
  );
}
