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
import { USER_ROLE } from "../../services/utils/roles";
import { useGlobalStates } from "../../hooks/globalStates";

import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredient } from "../../components/Ingredient";
import { Menu } from "../../components/Menu";

export function PreviewDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [data, setData] = useState(null);
  const [amount, setAmount] = useState();
  const[price, setPrice ]=useState()
 
  const { user } = useAuth();
  const params = useParams();

  const { request, setRequest, value, setValue} = useGlobalStates();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchDish() {
      const res = await api.get(`/dishes/${params.id}`);

      setData(res.data);



    }
    fetchDish();
  }, []);
  function handleBack() {
    navigate(-1);
  }

  useEffect(() => {
    setAmount(request);

  }, []); 


  
  useEffect(() => { 
     if(amount === 1 && data){
        setValue(data.price)
     } else {
       setPrice( value * amount);  
     }
  }, [amount,data, value]); 

  function handleEditDish() {
    navigate(`/editdish/${data.id}`);
  }



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

  function handleRequest() {
    setRequest(amount);
  }



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
                      {[USER_ROLE.CUSTOMER].includes(user.role) && (
                        <ButtonText
                          icon={FiMinus}
                          onClick={() => handleAmount("-")}
                        />
                      )}
                      {[USER_ROLE.CUSTOMER].includes(user.role) && (
                        <p>{amount}</p>
                      )}
                      {[USER_ROLE.CUSTOMER].includes(user.role) && (
                        <ButtonText
                          icon={GoPlus}
                          onClick={() => handleAmount("+")}
                          
                        />
                      )}
                    </div>
                    {[USER_ROLE.CUSTOMER].includes(user.role) && (
                      <ButtonCard
                        title={`Incluir - R$ ${amount !== 1 ? price : data.price } `}
                        onClick={handleRequest}
                     
                      />
                    )}
                    {[USER_ROLE.ADMIN].includes(user.role) && (
                      <ButtonCard
                        title="Editar prato"
                        onClick={handleEditDish}
                      />
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
