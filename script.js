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

function changeReadStatusButton(readButtonHTML, book) {
  readButtonHTML.addEventListener('click', () => {
    let newRead;
    if (readButtonHTML.textContent === 'Read') {
      readButtonHTML.textContent = 'Not Read';
      readButtonHTML.style.backgroundColor = 'red';
      newRead = false;
    } else {
      readButtonHTML.textContent = 'Read';
      readButtonHTML.style.backgroundColor = 'green';
      newRead = true;
    }

    const bookIndex = myLibrary.indexOf(book);
    if (bookIndex !== -1) {
      const newBook = new Book(book.title, book.author, book.pagesNumber, newRead);
      myLibrary.splice(bookIndex, 1, newBook);
    }
  });
}

function displayBooks() {
  mainGrid.textContent = '';
  myLibrary.forEach((newBook) => {
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    const bookContainerDiv = document.createElement('div');
    bookContainerDiv.classList.add('book-container');

    function addHTML(elementType, bookProperty) {
      const HTML = document.createElement(elementType);
      if (typeof bookProperty === 'boolean') {
        if (bookProperty === true) {
          HTML.textContent = 'Read';
          HTML.style.backgroundColor = 'green';
        } else {
          HTML.textContent = 'Not Read';
          HTML.style.backgroundColor = 'red';
        }
        changeReadStatusButton(HTML, newBook);
      } else {
        HTML.textContent = bookProperty;
      }
      bookDiv.appendChild(HTML);
    }

    addHTML('h2', newBook.title);
    addHTML('h3', newBook.author);
    addHTML('h3', newBook.pagesNumber);
    addHTML('button', newBook.read);

    const bookRemoveButton = document.createElement('button');
    bookRemoveButton.classList.add('remove');
    bookRemoveButton.textContent = 'Remove';
    bookRemoveButton.addEventListener('click', () => {
      const bookIndex = myLibrary.indexOf(newBook);
      myLibrary.splice(bookIndex, 1);
      displayBooks();
    });
    bookDiv.appendChild(bookRemoveButton);

    bookContainerDiv.appendChild(bookDiv);
    mainGrid.appendChild(bookContainerDiv);
    bookContainerDiv.scrollIntoView();
  });
}

submitButton.addEventListener('click', (e) => {
  const form = document.querySelector('form');

  if (form.checkValidity()) {
    const inputValues = [];
    inputs.forEach((input) => {
      if (input.value === 'on') {
        input = input.checked;
        inputValues.push(input);
      } else {
        inputValues.push(input.value);
      }
    });

    const newBook = new Book(
      inputValues[0],
      inputValues[1],
      inputValues[2],
      inputValues[3],
    );
    addBookToLibrary(newBook);
    displayBooks();
    e.preventDefault();
  }
});
