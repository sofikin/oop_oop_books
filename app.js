const form = document.querySelector("form");
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const isbnInput = document.querySelector("#isbn");

form.addEventListener("submit", addBook);

function addBook(e) {
    // input values
const title = titleInput.value;
const author = authorInput.value;
const isbn = isbnInput.value;
    // create elements <tr> and <td> and define their classes
const tr = document.createElement("tr");
tr.className = "collection";
const td1 = document.createElement("td");
td1.className = "collection-item1";
const td2 = document.createElement("td");
td2.className = "collection-item2";
const td3 = document.createElement("td");
td3.className = "collection-item3";
    // create text values for <td>
const text1 = document.createTextNode(title);
const text2 = document.createTextNode(author);
const text3 = document.createTextNode(isbn);
    // add text values to <td>
td1.appendChild(text1);
td2.appendChild(text2);
td3.appendChild(text3);
    // move <td> into <tr>
tr.appendChild(td1);
tr.appendChild(td2);
tr.appendChild(td3);
    // find tbody DOM component
const tbody = document.querySelector("tbody");
    // move <tr> to <tbody>
tbody.appendChild(tr);
    // clear input values
    titleInput.value = "";
    authorInput.value = "";
    isbnInput.value = "";
    // form submit event control
    e.preventDefault()
}