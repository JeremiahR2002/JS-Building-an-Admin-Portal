
// Your Code Here

async function main() {
const domain_url = "http://localhost:3001";
const endpoint = "listBooks";
let currentInput = "";
const rootElement = document.querySelector("#root");
async function getAllBooks() {
const response = await fetch(`${domain_url}/${endpoint}`);
const books = await response.json();
return books;
}

const books = await getAllBooks();

function handleInput(e){
  currentInput = e.target.value;
  console.log(currentInput);
}

function handleUpdate (){
   
}

let booksElement = books.map((book) => {
    return `<li>${book.title}
     <input id=${book.id} oninput=${(e)=>handleInput(e)} type="text" /> 
     <button onclick=${handleUpdate}>update</button>
    </li>`;
    
});
const ul = document.createElement("ul");
ul.innerHTML = booksElement;
rootElement.appendChild(ul);
}

main()