import { Container, MenuHeader, MainContent, Nav, ButtonMenu, Main} from "./styles";

import { X, MagnifyingGlass } from "@phosphor-icons/react";

import { useAuth } from "../../hooks/auth";

import { Footer } from"../Footer"
import { Input } from "../Input";
import { Button } from "../Button";

export function Menu({menuIsOpen, onCloseMenu}){
  const { signOut } = useAuth()

    return(
        <Container data-menu-is-open={menuIsOpen}>
           <MenuHeader>
               <ButtonMenu onClick={onCloseMenu}>
                    <X/>
                    <h1>Menu</h1>
               </ButtonMenu>
           </MenuHeader>
           <Main>
               <MainContent>

               <Input icon={MagnifyingGlass} placeholder="Busque por pratos ou ingredientes"/>
                <Nav>
                     <a href="#">Novo prato</a>
                     <a href="#" onClick={signOut}>Sair</a>
                </Nav> 
               </MainContent>
           </Main>
          <Footer/>
          

        </Container>
    )
}
