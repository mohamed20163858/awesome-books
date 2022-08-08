const section = document.querySelector('.books-list');
const addButton = document.querySelector('.add-books button');
const title = document.querySelector('.add-books .title input');
const author = document.querySelector('.add-books .author input');
const books = [];
let counter = 0;
function Book (title, author) {
    this.title = title;
    this.author = author;
}
function addBook ()
{
    counter++;
    const dynamicSection = document.createElement('div');
    dynamicSection.innerHTML = `
    <p>${title.value}</p>
    <p>${author.value}</p>
    <button class='remove${counter}'>Remove</button>
    <hr>
    `;
    section.appendChild(dynamicSection);
const book = new Book(title.value,author.value);
books.push(book);
console.log(books);
}
addButton.addEventListener('click', addBook);
