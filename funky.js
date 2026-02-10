import { animate, utils, createDraggable, spring } from './node_modules/animejs/dist/bundles/anime.esm.js';
//import { animate } from './animejs/dist/bundles/anime.esm.min.js';

cosnt [$logo] = utils.$('.logo.js');
const [ $button ] = utils.$('button');

animate('.logo.js', {
  scale: [
    { to: 1.25, ease: 'inOut(3)', duration: 200 },
    { to: 1, ease: spring({ bounce: .7 }) }
  ],
  loop: true,
  loopDelay: 250,
});