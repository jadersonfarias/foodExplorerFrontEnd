import {
  Container,
  HeaderLogo,
  Search,
  Request,
  Logout,
  Menu,
  Receipt_mobile,
  LogoImg,
} from "./styles";
import LogoExplorer from "../../assets/logoExplorer.svg";
import SignOut from "../../assets/SignOut.svg";
import { PiReceiptBold } from "react-icons/pi";
import { FaSearch } from "react-icons/fa";

import { useAuth } from "../../hooks/auth";

import { List, Receipt } from "@phosphor-icons/react";

import { api } from "../../services/api";
import { Input } from "../Input";
import { Button } from "../Button";
import { useGlobalStates } from "../../hooks/globalStates";
import { USER_ROLE } from "../../services/utils/roles";

export function Header({ onOpenMenu, children, ...rest }) {
  const { signOut, user } = useAuth();
  const { search, setSearch, setDishes } = useGlobalStates();

  async function handleSearch(e) {
    if (e.key === "Enter") {
      const res = await api.get(`/dishes?search=${search}`);
      console.log(res.data);
      setDishes(res.data);
    }
  }
  function handleChange(e) {
    setSearch(e.target.value);
  }

  return (
    <Container {...rest}>
      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>
      <HeaderLogo>
        <LogoImg>
          <img src={LogoExplorer} alt="" />
          <h1>Food Explorer</h1>
        </LogoImg>
        {user.role === USER_ROLE.ADMIN && <p>{user.role}</p>}
      </HeaderLogo>
      <Search>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FaSearch}
          onKeyPress={handleSearch}
          onChange={handleChange}
          value={search}
        />
      </Search>

      <Request>
        {[USER_ROLE.CUSTOMER].includes(user.role) &&
          <Button icon={PiReceiptBold} title="pedidos (0)" />
        }

    {[USER_ROLE.ADMIN].includes(user.role) &&
          <Button  title="Novo Prato" />
        }
        
      </Request>

      <Logout onClick={signOut}>
        <img src={SignOut} alt="sair" />
      </Logout>

      <Receipt_mobile>
        <Receipt />
        <span>0</span>
      </Receipt_mobile>
    </Container>
  );
}
