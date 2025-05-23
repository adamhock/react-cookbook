import React from 'react';
import './App.css';
import { IngredientProps, IngredientType } from './components/Ingredient/Ingredient';
import IngredientList from './components/IngredientList/IngredientList';

function App() {

  const [savedIngredients, setSavedIngredients] = React.useState<IngredientType[]>([
    {id: "1", name: "Chocolate", unit: "grams", amount: 100},
    {id: "2", name: "Sugar", unit: "grams", amount: 100},
    {id: "3", name: "Salt", unit: "grams", amount: 100},
  ]);


  const handleOnSave = (ingredients: IngredientType[]) => {
    setSavedIngredients(ingredients)
  }

  return <IngredientList ingredients={savedIngredients} onSave={handleOnSave} isEditable={true} />
}

export default App;
