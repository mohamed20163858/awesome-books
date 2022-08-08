const section = document.querySelector('.books-list');
const addButton = document.querySelector('.add-books button');
const title = document.querySelector('.add-books .title input');
const author = document.querySelector('.add-books .author input');
let books = [];
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
console.log(books);
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
    for(let i = 1; i <= books.length ; i += 1)
    {
        const removeButton =  document.querySelector(`.books-list div:nth-of-type(${i}) button `);
        removeButton.addEventListener('click', removeBook);
    }
    console.log(books);
}
addButton.addEventListener('click', addBook);
