import { Container, Content, ButtonCard, Button_back } from "./styles";
import { IoIosArrowBack } from "react-icons/io";

import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { Menu } from "../../components/Menu";

export function PreviewDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState(0);

  const { user } = useAuth();

  const params = useParams();

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1)
  }

  function handleAmount(value){
    if (value === "+") {
      setAmount(amount + 1);
    } else if (value === "-") {
      if (amount === 0) {
        return;
      }
      setAmount(amount - 1);
    }
  }

  useEffect(() => {
    async function fetchDish() {
      const res = await api.get(`/dishes/${params.id}`);

      setData(res.data);
    }
    fetchDish();
  }, []);

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      {data && (
        <Content>
          <Button_back
            title="voltar"
            icon={IoIosArrowBack}
            onClick={handleBack}
          />
          <section>
            <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="" />
            <div className="container">
              <h1>{data.name}</h1>
              <p>{data.description}</p>

              <div className="ingredient-tag">
                {data.ingredients.map((ingredient, i) => (
                  <Ingredient key={i} title={ingredient.title}></Ingredient>
                ))}
              </div>

              <div className="bottom-card">
                <div className="amount">
                  <ButtonText
                    icon={FiMinus}
                    onClick={() => handleAmount("-")}
                  />
                  <p>{amount}</p>
                  <ButtonText
                    icon={GoPlus}
                    onClick={() => handleAmount("+")}
                  />
                </div>
                <ButtonCard title="INCLUIR" />
              </div>
            </div>
          </section>
        </Content>
      )}
      <Footer />
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
    </Container>
  );
}
