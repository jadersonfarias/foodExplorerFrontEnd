import { Container, Content, ButtonCard } from "./styles";

import  salada  from "../../assets/salada.png"
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";


export function PreviewDish(){
    return(
        <Container>
            <Header/>
            <Content>
                <section>
                    <img src={salada} alt="" />

                    <div className="container">
                        <h1>Salada Ravanello</h1>
                        <p>Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial.</p>
                        <Ingredient title="alface"/>
                        <Ingredient title="alface"/>

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
            <Footer/>
        </Container>
    )
}