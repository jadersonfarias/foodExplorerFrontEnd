import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Logo } from "../../components/logo";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";

export function SignUp() {
  return (
    <Container>
      <Logo />
      <Form>
        <h1>Crie sua conta</h1>
        <div className="name">
          <label className="labels" htmlFor="name">
            Seu Nome
          </label>
          <Input placeholder="Nome: biro" type="text" icon={FiMail} />
        </div>

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
          <Input placeholder="Senha: 123" type="password" icon={FiLock} />
        </div>
        <Button title="faça login" />

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
