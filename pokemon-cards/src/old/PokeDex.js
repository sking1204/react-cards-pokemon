import React, { useState, useEffect } from "react";
import {v4 as uuid} from "uuid"; 
import PokemonSelect from "./PokemonSelect";
import PokemonCard from "./PokemonCard";
import "./PokeDex.css";
import useAxios from "../hooks/useAxios";

/* Renders a list of pokemon cards.
 * Can also add a new card at random,
 * or from a dropdown of available pokemon. */
function PokeDex() {
  const [pokemon, setPokemon] = useState([]);
  const { data, isLoading, error, setUrl, clearData } = useAxios(
    "https://pokeapi.co/api/v2/pokemon/"
  );

  const addPokemon = name => {
    setUrl(name);
  };

  // Update the 'pokemon' state when new data is fetched
  useEffect(() => {
    if (data) {
      setPokemon(pokemon => [
        ...pokemon,
        { ...data, id: uuid() }
      ]);
    }
  }, [data]);

  return (
    <div className="PokeDex">
      <div className="PokeDex-buttons">
        <h3>Please select your pokemon:</h3>
        <PokemonSelect add={addPokemon} />
        <button onClick={clearData}>Delete the pokemon!</button>
      </div>
      <div className="PokeDex-card-area">
        {Array.isArray(data) ? (
          data.map(card => <PokemonCard key={card.id} {...card} />)
        ) : (
          <PokemonCard key={data.id} {...data} />
        )}
      </div>
    </div>
  );
}

export default PokeDex;
