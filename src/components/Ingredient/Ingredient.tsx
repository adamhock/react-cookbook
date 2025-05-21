import React from 'react';
import './Ingredient.css';

export type IngredientProps = {
  id: string;
  ingredientName: string;
  amount: number;
  unit: string;
  onDelete?: (id: string) => void;
}
const Ingredient: React.FC<IngredientProps> = ({ingredientName: name, amount, unit, onDelete, id}) => {
  return (
    <div className='ingredient'>
      <span className='ingredient-name'>{name}</span>
      <span className='ingredient-amount'>{amount}</span>
      <span className='ingredient-unit'>{unit}</span>
      {
        onDelete && (
          <button onClick={() => onDelete(id)}>Delete</button>
        )
      }
    </div>
  );
};

export default Ingredient;
