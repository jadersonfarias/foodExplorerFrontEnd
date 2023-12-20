import { Container, Logo, Search, Request, Logout } from "./styles";
import LogoExplorer from "../../assets/logoExplorer.svg";
import SignOut from "../../assets/SignOut.svg";
import { PiReceiptBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";

import { Input } from "../Input";
import { Button } from "../Button";



export function Header({ children, ...rest }) {
  return (
    <Container {...rest}>
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

      <Logout>
        <img src={SignOut} alt="sair" />
      </Logout>
    </Container>
  );
}
