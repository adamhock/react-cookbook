import React, {forwardRef} from 'react';
import './Ingredient.css';

export type IngredientType = {
  id: string;
  name?: string;
  amount?: number;
  unit?: string;
}

export type IngredientProps = {
  ingredient: IngredientType
  onDelete?: (id: string) => void;
  onChange?: (id: string, field: keyof IngredientType, value: any) => void;
  editable?: boolean
}

const defaultIngredient: IngredientType = {
  id: crypto.randomUUID(),
  name: 'Name',
  amount: 0,
  unit: 'g'
}

export type IngredientHandle = { getValue: () => IngredientType };

const Ingredient: React.FC<IngredientProps> = ({ingredient = defaultIngredient, onDelete, editable, onChange}) => {

  const [localIngredient, setLocalIngredient] = React.useState<IngredientType>(ingredient)

  React.useEffect(() => {
    setLocalIngredient(ingredient);
  }, [ingredient]);

  return (
    <div className='ingredient'>
      {
        editable ? (
          <>
            <input type='text' value={localIngredient.name} className='ingredient-name' onChange={(e) => onChange && onChange(localIngredient.id, 'name', e.target.value)}/>
            <input type='number' value={localIngredient.amount} className='ingredient-amount' onChange={(e) => onChange && onChange(localIngredient.id, 'amount', e.target.valueAsNumber)}/>
            <input type='text' value={localIngredient.unit} className='ingredient-unit' onChange={(e) => onChange && onChange(localIngredient.id, 'unit', e.target.value)}/>
          </>
        ) : (
          <>
            <span className='ingredient-name'>{ingredient.name}</span>
            <span className='ingredient-amount'>{ingredient.amount}</span>
            <span className='ingredient-unit'>{ingredient.unit}</span>
          </>
        )
      }      
      {
        editable && onDelete && (
          <button onClick={() => onDelete(ingredient.id)}>Delete</button>
        )
      }
    </div>
  );
};

export default Ingredient;
