import React from 'react';
import logo from './logo.svg';
import './App.css';
import Ingredient from './components/Ingredient/Ingredient';
import IngredientList from './components/IngredientList/IngredientList';

function App() {

  const [ingredients, setIngredients] = React.useState([
    {id: "1", ingredientName: "Chocolate", unit: "grams", amount: 100},
    {id: "2", ingredientName: "Sugar", unit: "grams", amount: 100},
    {id: "3", ingredientName: "Salt", unit: "grams", amount: 100},
  ]);
  
  const handleDelete = (id: string) => {
    setIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
  }
  return <IngredientList ingredients={ingredients} onDelete={handleDelete}/>
}

export default App;
