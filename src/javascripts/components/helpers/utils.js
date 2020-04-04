const printToDom = (divId, textToPrint) => {
  document.getElementById(divId).innerHTML += textToPrint;
};

export default { printToDom };
