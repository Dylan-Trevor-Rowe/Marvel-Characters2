
import card from '../card/card';


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
