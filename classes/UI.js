class UI {
  constructor() {
    this.title = document.querySelector('#title')
    this.author = document.querySelector('#author')
    this.isbn = document.querySelector('#isbn')
    this.bookList = document.querySelector('#books')
  }
  addBook(book){
    const tr = document.createElement('tr')
    tr.innerHTML = `<td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.isbn}</td>
                <td><a href="#">X</a></td>`
    this.bookList.appendChild(tr)
  }

  getBook(click){
    let isbn = click.parentElement.previousElementSibling.textContent
    let author = click.parentElement.previousElementSibling.previousElementSibling.textContent
    let title = click.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent
    const book = new Book(title, author, isbn)
    return book
  }

  deleteBook(click){
    if(confirm('Do you really want to delete this book?')) {
      click.parentElement.parentElement.remove()
      return true
    } else {
      return false
    }
  }
}
