const section = document.querySelector('.books-list');
const addButton = document.querySelector('.add-books button');
const title = document.querySelector('.add-books .title input');
const author = document.querySelector('.add-books .author input');
let books = [];
if (window.localStorage.booksCollection)
{
    books = JSON.parse(window.localStorage.booksCollection);
    for(let i=0; i< books.length;i +=1)
    {
        const loadedSection = document.createElement('div');
        loadedSection.innerHTML = `
        <p>${books[i].title}</p>
        <p>${books[i].author}</p>
        <button>Remove</button>
        <hr>
        `;
        section.appendChild(loadedSection);
        const removeButtonStatic =  document.querySelector(`.books-list div:nth-of-type(${i+1}) button `);
        removeButtonStatic.addEventListener('click', removeBook);
    }
}
let bookTitle;
let bookAuthor;
function Book (title, author) {
    this.title = title;
    this.author = author;
}
function removeBook() {
 bookTitle = this.parentElement.querySelector('p:first-of-type').textContent;
 bookAuthor = this.parentElement.querySelector('p:last-of-type').textContent;
 this.parentElement.remove();
 books = books.filter( item => item.title !== bookTitle || item.author !== bookAuthor);
 window.localStorage.booksCollection= JSON.stringify(books);
}
function addBook ()
{
    const dynamicSection = document.createElement('div');
    dynamicSection.innerHTML = `
    <p>${title.value}</p>
    <p>${author.value}</p>
    <button>Remove</button>
    <hr>
    `;
    section.appendChild(dynamicSection);
    const book = new Book(title.value,author.value);
    books.push(book);
    window.localStorage.booksCollection= JSON.stringify(books);
    for(let i = 1; i <= books.length ; i += 1)
    {
        const removeButton =  document.querySelector(`.books-list div:nth-of-type(${i}) button `);
        removeButton.addEventListener('click', removeBook);
    }
}
addButton.addEventListener('click', addBook);
