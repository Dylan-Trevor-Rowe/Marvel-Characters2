/* eslint-disable no-unused-vars */
import character from "./helpers/data/characterData";
import characterList from "./characterlist/characterList";
// functions to filter data by the id and print on the correct cards by button click
const xmenButton = () => {
  document.getElementById("x-Menbtn").addEventListener("click", () => {
    document.getElementById("card").innerHTML = "";
    const xmenCharacter = character.getCharacters();
    const xMenFilter = xmenCharacter.filter(
      (person) => person.teamId === "team0",
    );
    characterList.printXmenCards(xMenFilter);
  });
};

const guardiansButton = () => {
  document.getElementById("guardiansBtn").addEventListener("click", () => {
    document.getElementById("card").innerHTML = "";
    const guardiansCharacter = character.getCharacters();
    const guardiansFilter = guardiansCharacter.filter(
      (person) => person.teamId === "team2",
    );
    characterList.printGuardiansCards(guardiansFilter);
  });
};

const avengersButton = () => {
  document.getElementById("AvengersBtn").addEventListener("click", () => {
    document.getElementById("card").innerHTML = "";
    // eslint-disable-next-line func-names
    // document.getElementById("").onclick = function (e) {
    //   e.target.style.visibility = 'hidden';
    // };
    const avengersCharacter = character.getCharacters();
    const avengersFilter = avengersCharacter.filter(
      (person) => person.teamId === "team1",
    );
    characterList.printAvengersCards(avengersFilter);
  });
};

const imageHide = () => {
  $("AvengersBtn").click(() => {
    $("#otherImage").hide(1000);
  });
};
export default {
  xmenButton,
  guardiansButton,
  avengersButton,
  imageHide,
};
