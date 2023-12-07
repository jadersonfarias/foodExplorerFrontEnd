import { Container, Logo, Search, Request } from "./styles";
import LogoExplorer from "../../assets/logoExplorer.svg";
import { PiReceiptBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

import { Input } from "../Input";
import { Button } from "../Button";

export function Header({ children }) {
  return (
    <Container>
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
        <Button icon={PiReceiptBold} title="pedidos" />
      </Request>
    </Container>
  );
}
