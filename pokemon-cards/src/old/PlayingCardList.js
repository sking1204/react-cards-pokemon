import React, { useState, useEffect } from "react"; 
import PlayingCard from "./PlayingCard";
import "./PlayingCardList.css";
import useAxios from "../hooks/useAxios";
import { v4 as uuid } from "uuid";
import axios from "axios";

/* Renders a list of playing cards.
 * Can also add a new card at random. */
function CardTable() {
  const [cards, setCards] = useState([]);
  const { data, isLoading, error } = useAxios(
    "https://deckofcardsapi.com/api/deck/new/draw/"
  );

 

  const addCard = () => {
    // Make API call to add a new card
    axios.get("https://deckofcardsapi.com/api/deck/new/draw/")
      .then(response => {
        const newCard = {
          id: uuid(),
          cards: response.data.cards
        };
        setCards(prevCards => [...prevCards, newCard]);
      })
      .catch(error => {
        console.error("Error adding card:", error);
      });
  };


  

  return (
    <div className="PlayingCardList">
      <h3>Pick a card, any card!</h3>
      <div>
        <button onClick={addCard}>Add a playing card!</button>
      </div>
      <div className="PlayingCardList-card-area">
        {cards.map((cardData) => (
          <PlayingCard key={cardData.id} front={cardData.cards[0].image} />
        ))}
      </div>
    </div>
  );
}

CardTable.defaultProps = {};

export default CardTable;
