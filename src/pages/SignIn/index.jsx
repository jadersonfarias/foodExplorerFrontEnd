import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import { Logo } from "../../components/logo";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

import { useState } from "react";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")
  

  const { signIn } = useAuth();


  function handleSignIn(){
    signIn({ email, password});
  }

  return (
    <Container>
      <Logo/>
      <Form>
        <h1>Faça login</h1>
        <div className="email">
          <label className="labels" htmlFor="email">
            Email
          </label>
          <Input placeholder="Email" type="text" icon={FiMail} onChange={e => setEmail(e.target.value)}/>
        </div>

        <div className="password">
          <label className="labels" htmlFor="password">
            Senha
          </label>
          <Input placeholder="Senha" type="password" icon={FiLock} onChange={e => setPassword(e.target.value)}/>
        
              <Button title="faça login" onClick={handleSignIn}/>
        </div>

        <Link to="/register">criar uma conta</Link>
      </Form>
    </Container>
  );
}
