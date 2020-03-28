import React, { useContext, useState } from 'react';

import Modal from '@material-ui/core/Modal';
import { makeStyles } from '@material-ui/core/styles';

import { ModalContext } from '../context/ModalContext';

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 600,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    overflow: 'auto',
    maxHeight: '90%'
  },
}));


function Recipe({ recipe }) {

  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const { information, setId } = useContext(ModalContext);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
    setId(null);
  }

  const handleClick = () => {
    setId(recipe.idDrink);
    handleOpen();
  }

  const showIngredients = information => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {

      if (information[`strIngredient${i}`] === null) break;

      ingredients.push(
        <li>{information[`strIngredient${i}`]} {information[`strMeasure${i}`]}</li>
      );
    }

    return ingredients;
  }

  return (
    <div className="card">
      <div className="card-header">
        <h3>{recipe.strDrink}</h3>
      </div>
      <img src={recipe.strDrinkThumb} alt={recipe.strDrink} className="card-img-top mw-100" />
      <div className="card-body">
        <button
          className="btn btn-block btn-info"
          onClick={handleClick}
        >
          See Recipe
        </button>

        <Modal
          open={open}
          onClose={handleClose}
        >
          <div style={modalStyle} className={classes.paper}>
            <h2>{information.strDrink}</h2>
            <h3 className="mt-4">Instructions</h3>
            <p>
              {information.strInstructions}
            </p>
            <img src={information.strDrinkThumb} alt="" className="img-fluid" />
            <h3>Ingredients and Cantitys</h3>
            <ul>
              {showIngredients(information)}
            </ul>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default Recipe;