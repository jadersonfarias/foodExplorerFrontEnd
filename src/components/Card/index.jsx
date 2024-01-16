import { Container, ButtonCard } from "./styles";
import { FiMinus } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";


import { api } from "../../services/api";


import test from "../../assets/test.png";

export function Card({data, ...rest }) {
  const { user } = useAuth() 

  return (
    <Container {...rest}>
   
        <div className="like">
            <ButtonText icon={FiHeart} />
       </div>

      <img  src={`${api.defaults.baseURL}/files/${data.image}`} 
        alt="Plate img" className="i"/>
      <h3>{data.name} &gt;</h3>
      <p className="hidden">{data.description}</p>
      <span>{data.price}</span>

      <div className="bottom-card">
        <div className="amount">
          <ButtonText icon={FiMinus} />
          <p>01</p>
          <ButtonText icon={GoPlus} />
        </div>
        <ButtonCard title="INCLUIR" />
        </div>   
    </Container>
  );
}
