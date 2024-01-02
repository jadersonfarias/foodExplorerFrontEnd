import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Logo } from "../../components/logo";
import { Button } from "../../components/Button";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Link } from "react-router-dom";

import { FiMail, FiLock } from "react-icons/fi";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate
  

  function handleSignUp() {
    if(!name || !email || !password){
      alert("Preencha todos os campos!")
    }

    api.post("/users", {name, email, password})
    .then(() => {
      alert("Usuário cadastrado com sucesso!")
      navigate("/")
    })
    .catch(error => {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível cadatrar")
      }
    })
  }

  return (
    <Container>
      <Logo />
      <Form>
        <h1>Crie sua conta</h1>
        <div className="name">
          <label className="labels" htmlFor="name">
            Seu Nome
          </label>
          <Input placeholder="Nome" type="text" icon={FiMail}  onChange={e => setName(e.target.value)}/>
        </div>

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
          <Button title="criar conta" onClick={handleSignUp}/>
        </div>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </Container>
  );
}
