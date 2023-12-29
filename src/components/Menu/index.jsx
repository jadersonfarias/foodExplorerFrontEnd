import { Container, Header, Content, Nav} from "./styles";

import { X, MagnifyingGlass } from "@phosphor-icons/react";

import { Footer } from"../Footer"
import { ButtonText } from "../ButtonText"
import { Input } from "../Input";

export function Menu(){
    return(
        <Container>
           <Header>
                <ButtonText title="Menu" icon={X}/>
           </Header>
           <Content>
                <Input icon={MagnifyingGlass} placeholder="Busque por pratos ou ingredientes"/>
                <Nav>
                     <a href="#">novo prato</a>
                     <a href="#">sair</a>
                </Nav>
           </Content>
           <Footer>

           </Footer>

        </Container>
    )
}
