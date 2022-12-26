/* eslint-disable no-param-reassign */
const myLibrary = [];

function Book(title, author, pagesNumber, read) {
  this.title = title;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.read = read;
}

/*function addBookToLibrary() {
}*/

const addBookButton = document.querySelector('.add-book');
const formPopUp = document.querySelector('.form-popup');
addBookButton.addEventListener('click', () => {
  formPopUp.style.display = 'flex';
});

const exitFormButton = document.querySelector('form .exit');
exitFormButton.addEventListener('click', () => {
  formPopUp.style.display = 'none';
  const inputs = document.querySelectorAll("form input");
  inputs.forEach((input) => {
    if (input.type !== 'checkbox') {
      input.value = '';
    } else {
      input.checked = false;
    }
  });
});
