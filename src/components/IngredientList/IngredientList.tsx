import React from 'react';
import { IngredientProps } from '../Ingredient/Ingredient';
import Ingredient from '../Ingredient/Ingredient';
import './IngredientList.css';

type IngredientListProps = {
  ingredients: IngredientProps[];
  onDelete?: (id: string) => void;
  title?: string;
}
const IngredientList: React.FC<IngredientListProps> = ({ingredients, onDelete}) => {

  if (!ingredients.length) {
    return <div>No ingredients found</div>;
  }

  return (
    <div className='ingredient-list'>
      {ingredients.map((ingredient) => (
        <Ingredient key={ingredient.ingredientName} {...ingredient} onDelete={onDelete}/>
      ))}
    </div>
  );
};

export default IngredientList;
