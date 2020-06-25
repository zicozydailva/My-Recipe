import React, { useEffect, useState} from 'react';
import './App.css';

import Recipe from './Recipe';

const App = () => {

  const APP_ID = "e583be6f";
  const APP_KEY = "134836950bf34cd8e4eb35336992d610"
  // const exampleReq = `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`;

 const [recipes, setRecipes] = useState([])
 const [search, setSearch] = useState("");
 const [query, setQuery] = useState("chicken")


  useEffect( () => {
    getRecipe()
  }, [query]);

  const getRecipe = async() => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json()
    setRecipes(data.hits)
    console.log(data.hits)
  }
  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input className="search-bar" type="search" placeholder="Search Recipe" onChange={updateSearch} value={search} />
        <button type="submit" className="search-button" >Submit</button>
      </form>
      {
        recipes.map(recipe => {
          return (
            <Recipe key={recipe.recipe.label}
                    title={recipe.recipe.label}
                    calories={recipe.recipe.calories}
                    image={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredients} />
          )
        })
      }
    </div>
  )
}

export default App

