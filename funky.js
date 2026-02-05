import { animate, utils, createDraggable, spring } from 'animejs';
import { animate } from './animejs/dist/bundles/anime.esm.min.js';

cosnt [$logo] = utils.$('.funky.js');
const [ $button ] = utils.$('button');

animate('.funky.js', {
  scale: [
    { to: 1.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: spring({ bounce: .7 }) }
  ],
  loop: true,
  loopDelay: 250,
});