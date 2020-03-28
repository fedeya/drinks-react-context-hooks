import React from 'react';

import RecetasProvider from './context/RecipesContext';
import ModalProvider from './context/ModalContext';
import CategorysProvider from './context/CategorysContext';

import Header from './components/Header';
import Formulary from './components/Formulary';
import RecipesList from './components/RecipesList';

function App() {
  return (
    <RecetasProvider>
      <ModalProvider>
        <CategorysProvider>
          <Header />
          <div className="container mt-5">
            <Formulary />
            <RecipesList />
          </div>
        </CategorysProvider>
      </ModalProvider>
    </RecetasProvider>
  );
}

export default App;
