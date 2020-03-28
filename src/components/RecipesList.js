import React, { useContext } from 'react';

import { RecipesContext } from '../context/RecipesContext';
import Recipe from './Recipe';

function RecipesList() {

  const { recipes } = useContext(RecipesContext);

  return (
    <div className="card-columns mt-4">
      {
        recipes && recipes.map(recipe => (
          <Recipe recipe={recipe} key={recipe.idDrink} />
        ))
      }
    </div>
  );
}

export default RecipesList;