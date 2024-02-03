import {
  Container,
  MainContent,
  Main,
  MainImage,
  ButtonCard,
  Button_back,
  DishContent,
} from "./styles";
import { IoIosArrowBack } from "react-icons/io";

import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { USER_ROLE } from "../../services/utils/roles"

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { Menu } from "../../components/Menu";

export function PreviewDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState(1);
 const [price, setPrice] = useState(1);

  const { user } = useAuth();

  const params = useParams();
  console.log(params)

  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
  ///setPrice(data.price * amount);
  
   }, [amount]);

  function handleAmount(value) {
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
        <Main>
<MainContent>
         
              <Button_back
              title="voltar"
              icon={IoIosArrowBack}
              onClick={handleBack}
            />
            <MainImage
              src={`${api.defaults.baseURL}/files/${data.image}`}
              alt="prato"
            />
            <DishContent>
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
                  <ButtonText icon={GoPlus} onClick={() => handleAmount("+")} />
                </div>
                {[USER_ROLE.ADMIN].includes(user.role) && (
                    <ButtonCard title={`Incluir ${price}`} />
                )}
              </div>
            </DishContent>
          </MainContent>
        </Main>
      )}
      <Footer />
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
    </Container>
  );
}
