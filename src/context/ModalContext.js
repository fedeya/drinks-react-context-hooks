import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const ModalContext = createContext();

function ModalProvider(props) {

  const [id, setId] = useState(null);
  const [information, setInformation] = useState({});

  useEffect(() => {
    const getRecipe = async () => {
      if(!id) return;

      const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
      const res = await axios.get(url);

      setInformation(res.data.drinks[0]);

    }
    setInformation({});
    getRecipe();
  }, [id]);

  return (
    <ModalContext.Provider
      value={{
        information,
        setId
      }}
    >
      {props.children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;