import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Logo } from "../../components/logo";
import { Button } from "../../components/Button";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  return (
    <Container>
      <Logo />
      <Form>
        <h1>Faça login</h1>
        <div className="email">
          <label className="labels" htmlFor="email">
            Email
          </label>
          <Input placeholder="Email" type="text" icon={FiMail} />
        </div>

        <div className="password">
          <label className="labels" htmlFor="password">
            Senha
          </label>
          <Input placeholder="Senha" type="password" icon={FiLock} />
        </div>
        <Button title="faça login" />

        <a href="#">criar uma conta</a>
      </Form>
    </Container>
  );
}
