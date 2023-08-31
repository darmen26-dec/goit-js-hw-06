// Napisz skrypt zarządzania formularzem logowania.

// <form class="login-form">
//   <label>
//     Email
//     <input type="email" name="email" />
//   </label>
//   <label>
//     Password
//     <input type="password" name="password" />
//   </label>
//   <button type="submit">Login</button>
// </form>

// Funkcjonalność przesyłania formularza form.login-form powinno zostać obsłużona przy użycie wydarzenia submit
// Podczas przesyłania formularza strona nie powinna się odświeżać.
// Jeśli w formularzu są nieuzupełnione pola, wyświetl alert z upomnieniem o tym, że wszystkie pola powinny zostać
// wypełnione. Jeśli użytkownik uzupełnił wszystkie pola i wysłał formularz, pobierz wartość pól jako obiekt, gdzie
// nazwa pola będzie nazwą właściwości, a wartość pola - wartością właściwości.Aby otrzymać dostęp do elementów
// formularza użyj właściwości elements. Wypisz obiekt z wartościami formularza w konsoli i wyczyść wartości pól
// input metodą reset.

'use strict';

const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.currentTarget;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === '' || password === '') {
    alert('Please fill in all the fields!');
  } else {
    const data = {
      email,
      password,
    };
    console.log(data);
    form.reset();
  }
}
