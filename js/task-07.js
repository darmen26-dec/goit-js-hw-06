// Napisz skrypt, który reaguje na zmianę wartości elementu input#font-size-control (zdarzenie input) i zmienia
// styl inline span#text aktualizując właściwość font - size. W rezultacie, podczas zmiany wartości suwakiem, ma
// zmieniać się rozmiar tekstu w elemencie span

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

'use strict';

const inputRange = document.querySelector('#font-size-control');
const textSpan = document.querySelector('#text');

const textResizing = () => {
  textSpan.style.fontSize = `${inputRange.value}px`;
};

inputRange.addEventListener('input', textResizing);
