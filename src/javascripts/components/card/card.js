/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
import print from "../helpers/utils";
import "./card.scss";
// eslint-disable-next-line no-unused-vars
import getCharacters from "../helpers/data/characterData";

const buildCharacterCard = (character) => {
  const genderClass = character.genderId === 'gender0' ? 'girl' : 'boy';
  let domstring = "";
  domstring += `<div class="${genderClass}" id="card" style="width: 18rem;">
  <img src="${character.imageUrl}" class="card-img-top" alt="...">
  <div id="card-body" class="${genderClass}">
    <h5 class="card-title"> ${character.name}</h5>
    <p class="card-text">${character.description}</p>
  </div>
</div>`;
  print.printToDom("card", domstring);

  // const genders = getCharacters.filter(() => 'gender1');
  // if (genders.genderId === 'gender1') {
  //   document.getElementsByClassName('boy');
  // } else {
  //   document.getElementsByClassName('girl');
  // }
};


export default { buildCharacterCard };
