import { Container, Form, ButtonPageNewDish } from "./styles";

import { IoIosArrowBack } from "react-icons/io";
import { FaArrowUpFromBracket } from "react-icons/fa6";

import { useState, useEffect } from "react";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";
import { useNavigate, useParams } from "react-router-dom";

import { Menu } from "../../components/Menu";
import { Header } from "../../components/Header";
import { Footer } from "../../components/Footer";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Ingredients } from "../../components/Ingredients";
import { ButtonText } from "../../components/ButtonText";

export function EditDish() {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [name, setName] = useState("");
  const [image, setImage] = useState(null);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  

  const { user } = useAuth();

  const navigate = useNavigate();

  const params = useParams();

  function handleBack() {
    navigate("/");
  }

  async function handleUpdateDishes() {
    if (!image) {
      return alert("Obrigatório ter uma image para o prato!")
    }

    if (!category) {
      return alert("precisa haver uma categoria!")
    }

    if (!ingredients) {
      return alert("Ingredientes obrigatório!")
    }

    if (!price) {
      return alert("Obrigatório ter um preço !")
    }

    if (!description) {
      return alert("Essa descrição é obrigatória.")
    }

     console.log({
    //    name,
    //    image,
    //    category,
    //   description,
    //    price,
     //  ingredients
      })

    if (newIngredient) {
      return alert(
        "Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio."
      );
    }

    const formData = new FormData()
    formData.append("image", image)
    formData.append("name", name)
    formData.append("description", description)
    formData.append("category", category)
    formData.append("price", price)


    ingredients.map((ingredient) => formData.append("ingredients", ingredient));

    //console.log(formData)
    await api.put(`/dishes/${params.id}`, formData);
  
    alert("Prato atualizado com sucesso! 👌")

    handleBack()
  }

  async function handleDelete() {
    try {
      alert("Desejas mesmo excluir este prato?")
      await api.delete(`/dishes/${params.id}`)
      navigate('/')
    } catch (error) {
      alert.error("Fala ao remover o prato, contate o desenvolvedor...")
    }
  }

  function handleAddIngredients() {
    //Impedir ingredients duplicados
    if (!ingredients.includes(newIngredient) && newIngredient.length > 0) {// Verifica se o novo ingrediente não está na lista e não é uma string vazia.
      setIngredients((prevState) => [...prevState, newIngredient]);
      setNewIngredient("");
    } else {
      return alert("Campo vazio ou duplicado!");
    }
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  useEffect(() => {
    async function fetchDish() {
      const res = await api.get(`/dishes/${params.id}`); //pega os dados por id do user

      const { name, image, description, category, price, ingredients } = res.data;
      console.log(res.data);

      const ingredientList = ingredients.map((ingredient) => ingredient.title);
      
      setName(name);
      setImage(image);
      setDescription(description);
      setCategory(category);
      setPrice(price);
      setIngredients(ingredientList);
    }

    fetchDish();
  }, []);

  function handleChangeImageDish(e) {
    const file = e.target.files[0];
    setImage(file);
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
              //to="/"
              onClick={handleBack}
             
            />
            <h1>Editar prato</h1>
          </header>
          <section className="col-1">
            <label htmlFor="image">
              Imagem do prato
              <div className="image">
                <FaArrowUpFromBracket />
                <span>{image ? "Alterar a Imagem" : "Selecione a imagem"}</span>

                <input
                  id="image"
                  type="file"
                  onChange={handleChangeImageDish}
                />
              </div>
            </label>

            <label htmlFor="name">
              name
              <Input
                id="name"
                type="text"
                placeholder="Ex: Salada ceasar"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </label>

            <label htmlFor="category">
              Categoria
              <select name="category" id="category"  className="arrowDown">
                <option value={category}>{category}</option>
                <option value="Refeições">Refeições</option>
                <option value="Sobremesas">Sobremesas</option>
                <option value="Bebidas">Bebidas</option>
              </select>
            </label>
          </section>

          <section className="col-2">
            <label htmlFor="Ingredientes">
            Ingredientes
              <div className="ingredients">
                {ingredients.map((ingredient, index) => (
                  <Ingredients
                    key={String(index)}
                    value={ingredient}
                    onClick={() => handleRemoveIngredients(ingredient)}
                  />
                ))}

                <Ingredients
                  isNew
                  placeholder="Adicionar"
                  onChange={(e) => setNewIngredient(e.target.value)}
                  value={newIngredient}
                  onClick={handleAddIngredients}
                />
              </div>
            </label>
                
            <label htmlFor="price">
              Preço
              <Input
                placeholder="R$ 00,00"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
              />
            </label>
          </section>

          <label htmlFor="description">
            Descrição
            <Textarea
              id="description"
              defaultValue={description}
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <div className="buttons">
            <ButtonPageNewDish title="Excluir pratos" onClick={handleDelete}/>
           
            <ButtonPageNewDish title="salvar alteracões" onClick={handleUpdateDishes}/>
          </div>
        </Form>
      </main>
      <Footer />
      <Menu />
    </Container>
  );
}
