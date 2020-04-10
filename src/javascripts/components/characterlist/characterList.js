/* eslint-disable arrow-body-style */

// eslint-disable-next-line import/no-cycle
import card from "../card/card";
// import characterData from "../helpers/data/characterData";


const printArrayToCards = (arr) => {
  arr.forEach(((element) => {
    card.buildCharacterCard(element);
  }));
};
const printXmenCards = (xmen) => {
  printArrayToCards(xmen);
};

const printGuardiansCards = (Guardians) => {
  printArrayToCards(Guardians);
};

const printAvengersCards = (avengers) => {
  printArrayToCards(avengers);
};


export default {
  printArrayToCards,
  printXmenCards,
  printGuardiansCards,
  printAvengersCards,
};
