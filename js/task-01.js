// Napisz skrypt, który:

// Policzy i wypisze w konsoli liczbę kategorii w ul#categories, czyli elementy li.item.
// Dla każdego elementu li.item na liście ul#categories, znajdzie i wypisze w konsoli tekst nagłówka elementu (tag <h2>) i liczbę elementów w danej kategorii (wszystkich w jej obrębie <li>).
// Po wykonaniu w konsoli znajdą się takie komunikaty.

// Number of categories: 3
// Category: Animals
// Elements: 4
// Category: Products
// Elements: 3
// Category: Technologies
// Elements: 5

'use strict'; // włączenie trybu ścisłego, tzn., że kod będzie wykonywany w bardziej restrykcyjnym środowisku, co pomoże uniknąć błędów

const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');

console.log('Number of categories:', items.length);

items.forEach((item) => {
  const categoryName = item.querySelector('h2').textContent;
  const elements = item.querySelectorAll('li');

  console.log('Category:', categoryName);
  console.log('Elements:', elements.length);
});
