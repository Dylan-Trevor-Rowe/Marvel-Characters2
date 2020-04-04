
import print from './helpers/utils';

const buildButtonEvent = () => {
  let domstring = '';
  domstring += `<div>
<button type="button1" id="x-Menbtn" class="x-Men">X-men</button>
<button type="button2" id="guardiansBtn" class="Guardians">Guardians</button>
<button type="button3" id="AvengersBtn" class="Avengers">Avengers</button>
</div>`;
  print.printToDom('heroButtons', domstring);
};

export default { buildButtonEvent };
