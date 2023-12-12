import { Container, ButtonCard } from "./styles";
import { FiMinus } from "react-icons/fi";
import { FiHeart } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { ButtonText } from "../ButtonText";

import test from "../../assets/test.png";

export function Dishes({data, ...rest }) {
  return (
    <Container {...rest}>
        <div className="like">
            <ButtonText icon={FiHeart} />
      </div>

      <img src={test} alt="plate img" />
      <h2>{data.title} &gt;</h2>
      <p>{data.description}</p>
      <span>R&#36; {data.rating}</span>

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
