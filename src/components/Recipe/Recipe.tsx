import React from 'react';
import IngredientList, { IngredientListProps } from '../IngredientList/IngredientList';
import './Recipe.css';

export type RecipeProps = {
  ingredientList: IngredientListProps;
  instructions: string;
}
const Recipe: React.FC<RecipeProps> = ({ingredientList, instructions}) => {
  return (
    <div className='recipe'>
    </div>
  );
};

export default Recipe;
