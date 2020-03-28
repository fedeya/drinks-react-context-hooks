import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const  CategorysContext = createContext();

function CategorysProvider(props) {

  const [categorys, setCategorys] = useState([]);

  useEffect(() => {
    const getCategorys = async () => {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

      const res = await axios.get(url);

      setCategorys(res.data.drinks);
    }

    getCategorys();
  }, []);

  return (
    <CategorysContext.Provider
      value={{
        categorys
      }}
    >
      {props.children}
    </CategorysContext.Provider>
  );
}

export default CategorysProvider;