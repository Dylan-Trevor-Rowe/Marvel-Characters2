/* eslint-disable no-undef */
// import '..styles/styles.scss';
import '../styles/styles.scss';
import button from './components/buttonevent';

import build from './components/buttons';

const init = () => {
  build.buildButtonEvent();
  button.xmenButton();
  button.guardiansButton();
  button.avengersButton();
};
init();
