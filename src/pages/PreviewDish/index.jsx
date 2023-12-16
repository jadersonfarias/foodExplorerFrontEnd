import { Container, Content } from "./styles";

import  salada  from "../../assets/salada.png"

import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Section } from "../../components/Section"

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
                    </div>
                </section>
            </Content>
            <Footer/>
        </Container>
    )
}