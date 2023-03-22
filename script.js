const myLibrary = [];

function Book(title, author, numberOfPages, status) {
  this.title = title;
  this.author = author;
  this.numberOfPages = numberOfPages;
  this.status = status;
  this.info = function () {
    return `${title} by ${author}, ${numberOfPages} pages, ${status}.`;
  };
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

const lotr = new Book('Lord of the Rings', 'J.R.R.Tolkien', 295, 'read');
const got = new Book('A Game of Thrones', 'George R.R. Martin', 694, 'read');
const nineteen84 = new Book('1984', 'George Orwell', 328, 'unread');

myLibrary.push(lotr);
myLibrary.push(got);
myLibrary.push(nineteen84);

const cardContainer = document.querySelector('.card-container');
myLibrary.forEach((book) => {
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
});

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

const markButtons = document.querySelectorAll('.card input');
markButtons.forEach((btn) => btn.addEventListener('click', changeStatus));
