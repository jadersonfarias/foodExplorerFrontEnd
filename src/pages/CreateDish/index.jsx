import { Container, Form } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowUpFromBracket } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";

import { useState } from "react";

import { Input } from "../../components/Input";
import { Textarea } from "../../components/TextArea";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredients } from "../../components/Ingredients";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";
import { Link } from "react-router-dom";

export function CreateDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [image, setImage] = useState(null);
  const [dish, setDish] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [price, setPrice] = useState("");

  const [description, setDescription] = useState("");

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted){
    setIngredients(prevState => prevState.filter(ingredient => ingredient !== deleted))
  }

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <main>
        <Form>
          <header>
            <ButtonText title="Voltar" icon={IoIosArrowBack} to="/" />
            <h1>Adicionar prato</h1>
          </header>
          <section className="col-1">
            <label htmlFor="image">
              Imagem do prato
              <div className="image">
                <FaArrowUpFromBracket />
                <span>Selecione a imagem</span>
                <input
                  id="image"
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </div>
            </label>

            <label htmlFor="name">
              Prato
              <Input
                id="name"
                type="text"
                placeholder="Ex: Salada ceasar"
                onChange={(e) => setDish(e.target.value)}
              />
            </label>

            <label htmlFor="category">
              Categoria
              <select
                name="category"
                id="category"
                onChange={(e) => setCategory(e.target.value)}
              >
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
                {ingredients.map((ingredient, index) => (
                  <Ingredients
                    key={String(index)} //posição
                    value={ingredient}//valores que estão armazenados o usestate
                    onClick={() => handleRemoveIngredient(ingredient)} //quando tem que colocar parametro  precisa ser um arrow function
                  />
                ))}
                <Ingredients
                  placeholder="Adicionar"
                  isNew
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredients}
                />
              </div>
            </label>

            <label htmlFor="price">
              Preço
              <Input
                id="price"
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
          </section>

          <label htmlFor="description">
            Descrição
            <Textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>

          <Button title="Salvar alteracões" />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}

//<Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
