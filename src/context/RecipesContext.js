import React, { createContext, useState } from 'react';
import axios from 'axios';

export const RecipesContext = createContext();

function RecipesProvider(props) {
  
  const [recipes, setRecipes] = useState([]);

  const getRecipes = async (search) => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${search.name}&c=${search.category}`
    const res = await axios.get(url);
    setRecipes(res.data.drinks);
  }
  
  return (
    <RecipesContext.Provider
      value={{
        recipes,
        getRecipes
      }}
    >
      {props.children}
    </RecipesContext.Provider>
  )
}

export default RecipesProvider;