// Napisz skrypt, który przy wpisywaniu tekstu w polu input input#name-input (zdarzenie input) wstawia jego aktualną
// wartość do span#name - output.Jeśli pole input jest puste, w spanie powinien wyświetlić się tekst "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

'use strict';

const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
  if (nameInput.value === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
