/* eslint-disable no-param-reassign */
const myLibrary = [];

function Book(title, author, pagesNumber, read) {
  this.title = title;
  this.author = author;
  this.pagesNumber = pagesNumber;
  this.read = read;
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const addBookButton = document.querySelector('.add-book');
const formPopUp = document.querySelector('.form-popup');
const exitFormButton = document.querySelector('form .exit');
const inputs = document.querySelectorAll('form input');
const submitButton = document.querySelector('form button[type="submit"]');
const mainGrid = document.querySelector('.main');

addBookButton.addEventListener('click', () => {
  formPopUp.style.display = 'flex';
});

exitFormButton.addEventListener('click', () => {
  formPopUp.style.display = 'none';
  inputs.forEach((input) => {
    if (input.type !== 'checkbox') {
      input.value = '';
    } else {
      input.checked = false;
    }
  });
});

function displayBooks() {
  mainGrid.textContent = '';
  myLibrary.forEach((newBook) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const bookContainerDiv = document.createElement('div');
    bookContainerDiv.classList.add('book-container');

    function addHTML(elementType, bookProperty) {
      const HTML = document.createElement(elementType);
      HTML.textContent = bookProperty;
      bookDiv.appendChild(HTML);
    }

    addHTML('h2', newBook.title);
    addHTML('h3', newBook.author);
    addHTML('h3', newBook.pagesNumber);
    addHTML('h3', newBook.read);

    const formSubmitButton = document.createElement('button');
    formSubmitButton.setAttribute('type', 'submit');
    bookDiv.appendChild(formSubmitButton);
    const formRemoveButton = document.createElement('button');
    formRemoveButton.classList.add('remove');
    bookDiv.appendChild(formRemoveButton);

    bookContainerDiv.appendChild(bookDiv);
    mainGrid.appendChild(bookContainerDiv);
  });
}

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const inputValues = [];
  inputs.forEach((input) => {
    inputValues.push(input.value);
  });

  const newBook = new Book(
    inputValues[0],
    inputValues[1],
    inputValues[2],
    inputValues[3],
  );

  addBookToLibrary(newBook);
  displayBooks();
  console.log(myLibrary);
});