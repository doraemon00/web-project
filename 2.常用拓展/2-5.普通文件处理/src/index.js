// const png = require("./assets/test.png");

import png from './assets/test.png'

if (Math.random < 0.5) {
  var img = document.createElement("img");
  img.src = png;
  document.body.appendChild(img);
}
