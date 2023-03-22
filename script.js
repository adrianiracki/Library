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
