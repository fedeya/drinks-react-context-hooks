import React, { useState, useContext } from 'react';

import { CategorysContext } from '../context/CategorysContext';
import { RecipesContext } from '../context/RecipesContext';

function Formulary() {

  const [search, setSearch] = useState({
    name: '',
    category: ''
  });

  const { categorys } = useContext(CategorysContext);
  const { getRecipes } = useContext(RecipesContext);

  const handleChange = e => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = e => {
    e.preventDefault();
    getRecipes(search);

  }

  return (
    <form className="col-12" onSubmit={handleSubmit} >
      <fieldset className="text-center">
        <legend>Search drinks for category or ingredient</legend>
      </fieldset>

      <div className="row mt-3">
        <div className="col-md-4">
          <input
            name="name"
            type="text"
            className="form-control"
            placeholder="Search for ingredient"
            value={search.name}
            onChange={handleChange}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            value={search.category}
            onChange={handleChange}
          >
            <option value="">--Select Category--</option>
            {
              categorys && categorys.map(({ strCategory }) => (
                <option 
                  value={strCategory} 
                  key={strCategory}
                >
                  {strCategory}
                </option>
              ))
            }
          </select>
        </div>
        <div className="col-md-4">
          <button className="btn btn-block btn-info">Search Drinks</button>
        </div>
      </div>

    </form>
  );
}

export default Formulary;