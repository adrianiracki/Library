const myLibrary = [];

function Book(title, author, numberOfPages, status) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.status = status;
}

const lotr = new Book('Lord of the Rings', 'J.R.R.Tolkien', 295, 'read');
const got = new Book('A Game of Thrones', 'George R.R. Martin', 694, 'read');
const nineteen84 = new Book('1984', 'George Orwell', 328, 'unread');

myLibrary.push(lotr);
myLibrary.push(got);
myLibrary.push(nineteen84);

function addBookToLibrary() {
  const title = document.querySelector('input#title').value;
  const author = document.querySelector('input#author').value;
  const numberOfPages = document.querySelector('input#pages').value;
  let status = 'unread';
  if (document.querySelector('input#read').checked === true) {
    status = 'read';
  }
  const book = new Book(title, author, numberOfPages, status);
  myLibrary.push(book);
  displayBook(book);
  document.querySelector('input#title').value = '';
  document.querySelector('input#author').value = '';
  document.querySelector('input#pages').value = '';
  document.querySelector('input#read').checked = false;
}
const submitBookButton = document.querySelector('form > button');
submitBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary();
  formContainer.classList.remove('show');
  mainContainer.classList.remove('active');
});

const cardContainer = document.querySelector('.card-container');

function displayBook(book) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.setAttribute('data-index', `${myLibrary.indexOf(book)}`);
  cardContainer.appendChild(card);
  const title = document.createElement('div');
  card.appendChild(title);
  const author = document.createElement('div');
  card.appendChild(author);
  const pages = document.createElement('div');
  card.appendChild(pages);
  const status = document.createElement('div');
  status.setAttribute('data-index', `${myLibrary.indexOf(book)}`);
  card.appendChild(status);
  title.textContent = book.title;
  author.textContent = book.author;
  pages.textContent = book.numberOfPages;
  status.textContent = book.status;
  const btn = document.createElement('input');
  card.appendChild(btn);
  btn.setAttribute('data-index', `${myLibrary.indexOf(book)}`);
  btn.setAttribute('type', 'checkbox');
  if (book.status === 'read') {
    btn.setAttribute('checked', 'true');
  }
  btn.addEventListener('click', changeStatus);
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'delete';
  card.appendChild(deleteButton);
  deleteButton.setAttribute('data-index', `${myLibrary.indexOf(book)}`);
  deleteButton.addEventListener('click', deleteBook);
}
myLibrary.forEach((book) => displayBook(book));

function changeStatus() {
  const index = this.attributes['data-index'].value;
  const status = document.querySelector(`.card div[data-index="${index}"]`);
  if (status.textContent === 'read') {
    status.textContent = 'unread';
    myLibrary[index].status = 'unread';
  } else {
    status.textContent = 'read';
    myLibrary[index].status = 'read';
  }
}

function deleteBook() {
  const index = this.attributes['data-index'].value;
  const card = document.querySelector(`.card[data-index='${index}'`);
  cardContainer.removeChild(card);
  delete myLibrary[index];
}

const markButtons = document.querySelectorAll('.card input');
markButtons.forEach((btn) => btn.addEventListener('click', changeStatus));

const formContainer = document.querySelector('.form-container');
const mainContainer = document.querySelector('.main-container');
const button = document.querySelector('.new-book');

button.addEventListener('click', (event) => {
  event.stopImmediatePropagation();
  formContainer.classList.add('show');
  mainContainer.classList.add('active');
});

document.addEventListener('click', (event) => {
  if (formContainer.classList.contains('show') && (event.target === formContainer)) {
    formContainer.classList.remove('show');
    mainContainer.classList.remove('active');
  }
});
