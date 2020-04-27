/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */

import print from "../helpers/utils";
import "./card.scss";
import characterData from "../helpers/data/characterData";


const buildCharacterCard = (character) => {
  if (character.description === "" && character.teamId === 'team0' && character.genderId === 'gender0') {
    character.description = '1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890 1234567890  ';
  } else if (character.genderId === "gender1" && character.teamId === 'team0' && character.description === '') {
    character.description = 'abcde fghij klmno pqrst uvwxy z abcde fghij klmno pqrst uvwxy z abcde fghij klmno pqrst uvwxy z abcde fghij klmno pqrst uvwxy z';
  }

  const gender = character.genderId === 'gender0' ? 'girl' : 'boy';
  let domstring = '';
  domstring += `<div class="card" style="width: 18rem;">
  <div class= "namediv">
  <h5> ${character.name}</h5>
  <img src="${character.imageUrl}" class="${gender} card-img-top" alt="...">
  <div>
    <p class="text">${character.description}</p>
      </div>
    </div>
  </div>`;

  print.printToDom("card", domstring);
};


export default { buildCharacterCard };
