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
addBookButton.addEventListener("click", () => {
  const formPopUp = document.querySelector('.form-popup');
  formPopUp.style.display = 'flex';
});
