// Napisz skrypt, który dla każdego elementu tablicy ingredients:

// Utworzy oddzielny element <li>. Obowiązkowo użyj metody document.createElement().
// Doda nazwę elementu (string z tablicy) jako jego zawartość tekstową.
// Doda do elementu klasę item.
// Następnie jedna operacja umieści wszystkie <li> na liście ul#ingredients.

'use strict';

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const listItems = ingredients.map((ingredient) => {
  const listItem = document.createElement('li');
  listItem.textContent = ingredient;
  listItem.classList.add('item');
  return listItem;
});

ingredientsList.append(...listItems);

// Pierwsze rozwiązanie

// 'use strict';

// const ingredients = [
//   'Potatoes',
//   'Mushrooms',
//   'Garlic',
//   'Tomatos',
//   'Herbs',
//   'Condiments',
// ];

// const ingredientsList = document.querySelector('#ingredients');

// ingredients.forEach((ingredient) => {
//   const listItem = document.createElement('li');
//   listItem.textContent = ingredient;

//   listItem.classList.add('item');
//   ingredientsList.append(listItem);
// });

// Efekt rozwiązania zadania jest właściwy jednak poproszę Cię o zmianę. Zwróc uwagę, że w Twoim rozwiązaniu iterujesz
// po tablicy, tworzysz elementy i dodajesz kolejno do ingredientsList. Nie jest to efektywne, pomyśl gdyby tych elementów
// było np. 100, 1000.... Lepiej jest je wygenerowac i dodać wszystkie na końcu do listy.
// Wykorzystaj w zadaniu metode tablicową map(), zmien tylko sposób dodawania item do listy tj. dodaj poza metodą
// wszystkie  elementy - podobnie jak w zadaniu 3.
