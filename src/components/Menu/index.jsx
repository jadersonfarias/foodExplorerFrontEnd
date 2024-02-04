import {
  Container,
  MenuHeader,
  MainContent,
  Nav,
  ButtonMenu,
  Main,
} from "./styles";

import { X, MagnifyingGlass } from "@phosphor-icons/react";
import { USER_ROLE } from "../../services/utils/roles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";

import { Footer } from "../Footer";
import { Input } from "../Input";
import { Button } from "../Button";

export function Menu({ menuIsOpen, onCloseMenu }) {
  const { user } = useAuth();

  const navigate = useNavigate();

  function handleBack() {
    navigate("/");
  }

  function handleNewDish() {
    navigate("/createDish");
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <MenuHeader>
        <ButtonMenu onClick={onCloseMenu}>
          <X />
          <h1>Menu</h1>
        </ButtonMenu>
      </MenuHeader>
      <Main>
        <MainContent>
          <Input
            icon={MagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
          />
          <Nav>
            {[USER_ROLE.ADMIN].includes(user.role) && (
              <a href="" onClick={handleNewDish}>
                Novo prato
              </a>
            )}
            <a href="" onClick={handleBack}>
              Sair
            </a>
          </Nav>
        </MainContent>
      </Main>
      <Footer />
    </Container>
  );
}
