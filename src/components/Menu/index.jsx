import { Container, Header, Content, Nav} from "./styles";

import { X, MagnifyingGlass } from "@phosphor-icons/react";

import { Footer } from"../Footer"
import { Input } from "../Input";

export function Menu({menuIsOpen, onCloseMenu}){
    return(
        <Container data-menu-is-open={menuIsOpen}>
           <Header>
               <button onClick={onCloseMenu}>
                    <h1><X/>Menu</h1>
               </button>
           </Header>
           <Content>
                <Input icon={MagnifyingGlass} placeholder="Busque por pratos ou ingredientes"/>
                <Nav>
                     <a href="#">novo prato</a>
                     <a href="#">sair</a>
                </Nav>
           </Content>
          <Footer></Footer>

        </Container>
    )
}
