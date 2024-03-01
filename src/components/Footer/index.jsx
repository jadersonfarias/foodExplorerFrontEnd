import { Container, LogoContainer} from "./styles";
import { Logo } from "../Logo";


export function Footer() {
  return (
    <Container>
      <LogoContainer>
        <Logo fill="#4D585E"/>
        <h1>Food Explorer</h1>
      </LogoContainer>

      <span>© 2023 - Todos os direitos reservados.</span>
    </Container>
  );
}
