import { Container, Form } from "./styles";
import { IoIosArrowBack } from "react-icons/io";
import { FaArrowUpFromBracket } from "react-icons/fa6";

import { useState } from "react";

import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Ingredients } from "../../components/Ingredients";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";
import { Menu } from "../../components/Menu";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function CreateDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  const [ingredients, setIngredients] = useState([]); //guarda todos
  const [newIngredient, setNewIngredient] = useState(""); //guarda um só para passar para array
  const [price, setPrice] = useState(0);

  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddIngredients() {
    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  async function handleNewDish() {
    // console.log({
    //   //name,
    //   //image,
    //   // category,
    //   // description,
    //   // price,
    //  ingredients,
    // }); ingredients.map((ingredient) => formData.append("ingredients", ingredient));
    if (!image) {
      return alert("imagem obrigatoria");
    }

    if (!name) {
      return alert("nome do prato  obrigatorio ");
    }

    if (!category) {
      return alert("O campo de categoria é obrigatóio");
    }

    if (newIngredient) {
      return alert(
        "Você deixou uma tag no campo para adicionar,  mas não clicou em adicionar."
      );
    }

    if (ingredients.length === 0) {
      return alert("O campo ingredients é obrigatório");
    }

    if (!price) {
      return alert("campo de preço obrigatório");
    }

    if (!description) {
      return alert("O campo de Descrição é obrigatória ");
    }

    const formData = new FormData();
    formData.append("image", image);
    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    // ingredients.map((ingredient) => formData.append("ingredients", JSON.stringify(ingredient)));

    if (Array.isArray(ingredients)) {
      //retorna true se for um array
      ingredients.forEach(
        (
          ingredient //percorre todos os itens ecoloca no formdata
        ) => formData.append("ingredients[]", ingredient)
      );
    }

    await api.post("/dishes", formData);

    alert("nota criada com sucesso! 👌");
    navigate("/");
  }

  function handleBack() {
    navigate("/");
  }

  return (
    <Container>
      <Menu menuIsOpen={menuIsOpen} onCloseMenu={() => setMenuIsOpen(false)} />
      <Header onOpenMenu={() => setMenuIsOpen(true)} />
      <main>
        <Form>
          <header>
            <ButtonText
              title="Voltar"
              icon={IoIosArrowBack}
              onClick={handleBack}
            />
            <h1>Adicionar prato </h1>
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
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="category">
              Categoria
              <select
                className="arrowDown"
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
                    value={ingredient} //valores que estão armazenados no usestate
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
                onChange={(e) => setPrice(Number(e.target.value))}
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

          <Button title="Salvar alteracões" onClick={handleNewDish} />
        </Form>
      </main>
      <Footer />
    </Container>
  );
}

//<Textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"/>
