
import print from './helpers/utils';

const buildButtonEvent = () => {
  let domstring = '';
  domstring += `<div>
<button type="button" id="x-Menbtn" class="btn btn-primary">X-men</button>
<button type="button" id="guardiansBtn" class="btn btn-primary">Guardians</button>
<button type="button" id="AvengersBtn" class="btn btn-primary">Avengers</button>
</div>`;
  print.printToDom('heroButtons', domstring);
};

export default { buildButtonEvent };
