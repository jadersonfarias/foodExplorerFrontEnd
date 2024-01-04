import {
  Container,
  Logo,
  Search,
  Request,
  Logout,
  Menu,
  Receipt_mobile,
} from "./styles";
import LogoExplorer from "../../assets/logoExplorer.svg";
import SignOut from "../../assets/SignOut.svg";
import { PiReceiptBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

import { useAuth } from "../../hooks/auth";

import { List, Receipt } from "@phosphor-icons/react";

import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ onOpenMenu, children, ...rest   }) {
  const { signOut } = useAuth()
  return (
    <Container {...rest}>

      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>
      <Logo>
        <img src={LogoExplorer} alt="" />
        <h1>Food Explorer</h1>
      </Logo>
      <Search>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FaSearch}
        />
      </Search>

      <Request>
        <Button icon={PiReceiptBold} title="pedidos (0)" />
      </Request>

      <Logout onClick={signOut}>
        <img src={SignOut} alt="sair" />
      </Logout>

      <Receipt_mobile>
        <Receipt/>
        <span>0</span>
      </Receipt_mobile>


    </Container>
  );
}
