import {
  Container,
  MenuHeader,
  MainContent,
  Nav,
  ButtonMenu,
  Main,
  ButtonText
} from "./styles";

import { X, MagnifyingGlass } from "@phosphor-icons/react";
import { USER_ROLE } from "../../services/utils/roles";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";
import { Button } from "../Button";

import { useGlobalStates } from "../../hooks/globalStates";

import { Footer } from "../Footer";
import { Input } from "../Input";


export function Menu({ menuIsOpen, onCloseMenu }) {
  const { user, signOut} = useAuth();

  const { search, setSearch, setDishes} = useGlobalStates();

  const navigate = useNavigate();

  async function handleSearch(e) {
    if (e.key === "Enter") {
      const res = await api.get(`/dishes?search=${search}`);
      console.log(res.data);
      setDishes(res.data);
      onCloseMenu()
      navigate("/")
    }
  }

  function handleChange(e) {
    setSearch(e.target.value);
  }


  function handleNewDish() {
   navigate("/CreateDish");
  }

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <MenuHeader>
        <ButtonMenu onClick={onCloseMenu}>
          <X/>
          <h1>Menu</h1>
        </ButtonMenu>
      </MenuHeader>
      <Main>
        <MainContent>
          <Input
            icon={MagnifyingGlass}
            placeholder="Busque por pratos ou ingredientes"
            onKeyPress={handleSearch}
            onChange={handleChange}
            value={search}
          />
          <Nav>
            {[USER_ROLE.ADMIN].includes(user.role) && (
              // <a href="" onClick={handleNewDish}>
              //   Novo prato
              // </a>
              <ButtonText onClick={handleNewDish} >
                Novo prato
              </ButtonText>
            )}
            <a href="" onClick={signOut}>
              Sair
            </a>
          </Nav>
        </MainContent>
      </Main>
      <Footer />
    </Container>
  );
}
