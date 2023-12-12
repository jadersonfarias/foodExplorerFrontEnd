import { Container, Logo } from "./styles";
import LogoExplorer from "../../assets/logoExplorer.svg";

export function Footer() {
  return (
    <Container>
      <Logo>
        <img src={LogoExplorer} alt="" />
        <h1>Food Explorer</h1>
      </Logo>

      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
