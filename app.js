const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");
const entryList = document.querySelector(".books");

form.addEventListener("submit", addBook);
// entryList.addEventListener("click", deleteBook);

function addBook(e) {
const title = titleInput.value;
const author = authorInput.value;
const isbn = isbnInput.value;
const tr = document.createElement("tr");
tr.className = "collection";
const td1 = document.createElement("td");
td1.className = "collection-item1";
const td2 = document.createElement("td");
td2.className = "collection-item2";
const td3 = document.createElement("td");
td3.className = "collection-item3";
const text1 = document.createTextNode(title);
const text2 = document.createTextNode(author);
const text3 = document.createTextNode(isbn);
td1.appendChild(text1);
td2.appendChild(text2);
td3.appendChild(text3);
tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
const tbody = document.querySelector("tbody");
tbody.appendChild(tr);
/*
const tr = document.createElement("tr");
const text1 = document.createTextNode(title);
const text2 = document.createTextNode(author);
const text3 = document.createTextNode(isbn);
    const a = document.createElement("a");
    a.setAttribute("href", "#");
    a.className = "secondary-content";
    a.appendChild(document.createTextNode("x"));
    tr.appendChild(a);
    */
    console.log(tr);
    e.preventDefault()

}

/*

function addEntry(e) {
    // input value
    const task = taskInput.value;
    // create <li> element
    const li = document.createElement("li");
    // define <li> css class
    li.className = "collection-item";
    // create text value for <li>
    const text = document.createTextNode(task);
    // add text value to <li>
    li.appendChild(text);
    // create link element
    const a = document.createElement("a");
    // set href attribute
    a.setAttribute("href", "#");
    // add css style
    a.className = "secondary-content";
    // add x text to link
    a.appendChild(document.createTextNode("x"));
    li.appendChild(a);
    // find <ul> dom component
    const ul = document.querySelector(".collection");
    // add <li> to <ul>
    ul.appendChild(li);

    console.log(a);

    // clear input value
    taskInput.value = "";
    e.preventDefault();
}

function deleteEntry(e) {
    if (e.target.textContent == "x") {
        if (confirm("Do you want to delete this entry?")) {
            e.target.parentElement.remove();
        }
    }
}

*/