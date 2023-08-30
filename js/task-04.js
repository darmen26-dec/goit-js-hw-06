// Licznik składa się z elementu span i przycisków, które, po ich kliknięciu, powinny zwiększać i zmniejszać
// jego wartość o jednostkę.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Utwórz zmienną counterValue w której będzie przechowywana aktualna wartość licznika i nadaj jej początkową wartość
// wartość 0. Dodaj click listeners do przycisków, i przy ich pomocy zwiększaj i zmniejszaj wartość licznika.
// Aktualizuj interfejs (widok HTML) nową wartością zmiennej counterValue po każdej jej zmianie.

'use strict';

const value = document.querySelector('#value');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');

let counterValue = 0;

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  value.textContent = counterValue;
});
