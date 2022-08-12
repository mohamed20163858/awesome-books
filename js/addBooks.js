const message = document.createElement('p');
const section = document.querySelector('.books-list');
const addButton = document.querySelector('.add-books button');
const title = document.querySelector('.add-books .title input');
const author = document.querySelector('.add-books .author input');
const addBookSection = document.querySelector('.add-books');
addBookSection.appendChild(message);
let bookTitle;
let bookAuthor;
function BooksArray(books = []) {
  this.books = books;
}
const books = new BooksArray();
class Methods {
  addBook() {
    const use = new Methods();
    message.textContent = '';
    if (title.value === '' || author.value === '') {
      message.style.cssText = 'color:red;margin-top:20px;';
      if (title.value === '' && author.value === '') {
        message.textContent = 'title and author fields are missing please fill them before adding your book';
      } else if (title.value === '') {
        message.textContent = 'title field is missing please fill it before adding your book';
      } else {
        message.textContent = 'author field is missing please fill it before adding your book';
      }
      return;
    }
    const dynamicSection = document.createElement('div');
    dynamicSection.classList.add('row');
    dynamicSection.innerHTML = `
      <p>"${title.value}" by ${author.value}</p>
      <button>Remove</button>
      `;
    section.appendChild(dynamicSection);
    const book = { title: title.value, author: author.value };
    books.books.push(book);
    window.localStorage.booksCollection = JSON.stringify(books.books);
    for (let i = 1; i <= books.books.length; i += 1) {
      const removeButton = document.querySelector(`.books-list div:nth-of-type(${i}) button `);
      removeButton.addEventListener('click', use.removeBook);
    }
    title.value = '';
    author.value = '';
    this.style.color = 'green';
  }

  removeBook() {
    const k = this.parentElement.querySelector('p').textContent;
    [bookTitle, bookAuthor] = k.split(' by ');
    bookTitle = bookTitle.slice(1, -1);
    this.parentElement.remove();
    books.books = books.books.filter(
      (item) => item.title !== bookTitle || item.author !== bookAuthor,
    );
    window.localStorage.booksCollection = JSON.stringify(books.books);
  }
}
const booksMethods = new Methods();
if (window.localStorage.booksCollection) {
  books.books = JSON.parse(window.localStorage.booksCollection);
  for (let i = 0; i < books.books.length; i += 1) {
    const loadedSection = document.createElement('div');
    loadedSection.classList.add('row');
    loadedSection.innerHTML = `
        <p>"${books.books[i].title}" by ${books.books[i].author}</p>
        <button>Remove</button>
        `;
    section.appendChild(loadedSection);
    const removeButtonStatic = document.querySelector(`.books-list div:nth-of-type(${i + 1}) button `);
    removeButtonStatic.addEventListener('click', booksMethods.removeBook);
  }
}
addButton.addEventListener('click', booksMethods.addBook);
