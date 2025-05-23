import React from 'react';
import { IngredientType } from '../Ingredient/Ingredient';
import Ingredient from '../Ingredient/Ingredient';
import './IngredientList.css';

export type IngredientListProps = {
  ingredients: IngredientType[];
  title?: string;
  isEditable?: boolean
  editable?: boolean;
  onSave?: (ingredients: IngredientType[]) => void;
  onCancel?: () => void;
}
const IngredientList: React.FC<IngredientListProps> = ({ingredients, editable, onSave, onCancel, isEditable}) => {

  const [isEditing, setIsEditing] = React.useState(editable ?? false);
  const [localIngredients, setLocalIngredients] = React.useState(ingredients)
  const [tempIngredients, setTempIngredients] = React.useState<IngredientType[]>([])

  const handleEdit = () => {
    setTempIngredients(ingredients);
    setIsEditing(true);
  }

  const handleSave = () => {
    setLocalIngredients(tempIngredients);
    setIsEditing(false);
    onSave && onSave([...tempIngredients])
  };

  const handleAddTemp = () => {
    const newTempIngredient: IngredientType = {
      id: crypto.randomUUID(),
      name: 'Name',
      amount: 0,
      unit: 'g'
    }
    setTempIngredients((prev) => [...prev, newTempIngredient])
  }

  const handleOnDelete = (id: string) => {
    setTempIngredients((prev) => prev.filter((ingredient) => ingredient.id !== id));
  }

  const handleCancel = () => {
    setTempIngredients(ingredients);
    setIsEditing(false);
    onCancel && onCancel();
  }

  const handleChange = (id: string, field: keyof IngredientType, value: any) => {
    setTempIngredients((prev) =>
      prev.map((prevIngredient) =>
        prevIngredient.id === id ? { ...prevIngredient, [field]: value } : prevIngredient
      )
    );
  };

  const currentList = isEditing ? tempIngredients : localIngredients

  return (
    <div className='ingredient-list'>
      {currentList.length > 0
        ? currentList.map((currentIngredient) => (
        <Ingredient key={currentIngredient.id} onDelete={handleOnDelete} editable={isEditing} ingredient={currentIngredient} onChange={handleChange}/>
      )) : (
        <div>No ingredients found</div>
      )}
      {isEditing && (
        <>
          <button onClick={handleAddTemp}>Add</button>
          <button onClick={handleCancel}>Cancel</button>
          <button onClick={handleSave}>Save</button>
        </>
      )}
      {
        isEditable && !isEditing && (
          <button onClick={handleEdit}>Edit</button>
        )
      }

    </div>
  );
};

export default IngredientList;
