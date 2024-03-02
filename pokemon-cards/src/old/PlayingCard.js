//Refactored

import backOfCard from "./back.png";
import "./PlayingCard.css"
import useFlip from "../hooks/useFlip";

const PlayingCard = ({front, back=backOfCard}) =>{
  const [isFacingUp, toggleFlipState] = useFlip()
  return(
    <img
     src={isFacingUp ? front : back}
     alt="playing card"
     onClick={toggleFlipState}
     className="Playing Card"
     />
  );
}

export default PlayingCard;


//ORIGINAL CODE:
/* Renders a single playing card. */
// function PlayingCard({ front, back = backOfCard }) {
//   const [isFacingUp, setIsFacingUp] = useState(true);
//   const flipCard = () => {
//     setIsFacingUp(isUp => !isUp);
//   };
//   return (
//     <img
//       src={isFacingUp ? front : back}
//       alt="playing card"
//       onClick={flipCard}
//       className="PlayingCard Card"
//     />
//   );
// }

// export default PlayingCard;
