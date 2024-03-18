import { Container, Form, LogoAuth } from "./styles";
import { Link } from "react-router-dom";
import { Input } from "../../components/Input";
import LogoExplorer from "../../assets/LogoExplorer.svg";
import { Button } from "../../components/Button";
import { useAuth } from "../../hooks/auth";

import { useState } from "react";

import { FiMail, FiLock } from "react-icons/fi";

export function SignIn() {
  const [email, setEmail ] = useState("")
  const [password, setPassword ] = useState("")
  const [loading, setLoading] = useState(false);
  

  const { signIn } = useAuth();


  function handleSignIn(){
    setLoading(true);
    signIn({ email, password}).finally(() => setLoading(false));
  }

  return (
    <Container>
      <LogoAuth>
        <img src={LogoExplorer} alt="" />
        <h1>Food explorer</h1>
      </LogoAuth>
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
        
          <Button title="Faça Login" onClick={handleSignIn} loading={loading}/>
        </div>

        <Link to="/register">criar uma conta</Link>
      </Form>
    </Container>
  );
}
