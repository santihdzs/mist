import { createSky } from './sky.js';

const canvas = document.querySelector('.sky');
if (canvas && !createSky(canvas, { quiet: () => [document.querySelector('.soon h1')] })) canvas.remove();
