import { Container, ButtonCard } from "./styles";
import { GoPencil } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { ButtonText } from "../ButtonText";
import { useAuth } from "../../hooks/auth";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { USER_ROLE } from "../../services/utils/roles";

import { api } from "../../services/api";

import test from "../../assets/test.png";

export function Card({ data, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  const params = useParams();

  const [amount, setAmount] = useState(1);
  const [price, setPrice] = useState(Number(data.price));

  function handleNavigate() {
    navigate(`/PreviewDish/${data.id}`);
  }

  function handleNavigateEditDish() {
    navigate(`/editdish/${data.id}`);
  }

  useEffect(() => {
    setPrice(data.price * amount);
  }, [amount]);

  function handleAmount(value) {
    if (value === "+") {
      setAmount(amount + 1);
    } else if (value === "-" && amount > 1) {
      setAmount(amount - 1);
    }
  }

  return (
    <Container {...rest} >
      <div className="like">
        {[USER_ROLE.CUSTOMER].includes(user.role) && (
          <ButtonText icon={FiHeart} />
        )}

      {[USER_ROLE.ADMIN].includes(user.role) && (
        <ButtonText icon={GoPencil} onClick={handleNavigateEditDish}/>
        )}
      </div>

      <img
        src={`${api.defaults.baseURL}/files/${data.image}`}
        alt="Plate img"
        className="i"
        onClick={handleNavigate}
      />
      <h3>{data.name} &gt;</h3>
      <p className="hidden">{data.description}</p>
      <span>
        {price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </span>

      <div className="bottom-card">
        <div className="amount">
          <ButtonText icon={FiMinus} onClick={() => handleAmount("-")} />
          <p>{amount}</p>
          <ButtonText icon={GoPlus} onClick={() => handleAmount("+")} />
        </div>
        <ButtonCard title="INCLUIR" />
      </div>
    </Container>
  );
}
