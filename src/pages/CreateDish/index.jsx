import { Container, Form} from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";

import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredients } from "../../components/Ingredients";
import { ButtonText } from "../../components/ButtonText";

export function CreateDish() {
  return (
    <Container>
      <Header  />
      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" icon={IoIosArrowBack} to="/"/>
            <h1>Adicionar prato</h1>
          </header>
          <section className="col-1">
            <label htmlFor="image">
              Imagem do prato
              <div className="image">
                <FaArrowUpFromBracket />
                <span>Selecione a imagem</span>
                <input id="image" type="file" />
              </div>
            </label>

            <label htmlFor="name">
              name
              <Input id="name" type="text" placeholder="Ex: Salada ceasar" />
            </label>
     
            <label htmlFor="category">
              Categoria
              <select name="category" id="category">
                <option value="">Selecione uma Categoria </option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
      
            </label>

          </section>

          <section className="col-2">
                <label htmlFor="ingredientes">
                  Ingredientes
                  
                  <div className="ingredients">
                      <Ingredients 
                      placeholder="vai"
                     isNew
                      />
                       <Ingredients 
                      placeholder="vai"
                  
                      />
                  </div>
             
                </label>

                <label htmlFor="price">

                  Preço
                  <Input
                      id="price"
                      placeholder="R$ 00,00"
                  />
                </label>
          </section>

          <label htmlFor="description">
          Descrição
          <Textarea 
          id="description"
          placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
          />
          </label>

        <button>
          salvar alteracões
        </button>
        </Form>
      </main>
      <Footer />
    </Container>
  );
}

//<Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
