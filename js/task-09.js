// Napisz skrypt, który zmienia kolor tła elementu <body> (poprzez style inline) po kliknięciu na button.change-color
// i wyświetla wartość koloru w span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Aby wygenerować losowy kolor użyj funkcji getRandomHexColor.

// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

'use strict';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function changeBackgroundColor() {
  const color = getRandomHexColor();
  document.body.style.background = color;
  document.querySelector('.color').textContent = color;
}

const button = document.querySelector('.change-color');
button.addEventListener('click', changeBackgroundColor);
