document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("book-form");
    const bookList = document.getElementById("book-list")

    form.addEventListener("submit", (event) => {
        event.preventDefault()
        const title = document.getElementById("title").value
        const author = document.getElementById("author").value
        const year = document.getElementById("year").value

        if(title && author && year){
            addBook(title, author, year)
            form.reset()
        }
    })
    function addBook(title, author, year){
        const li = document.createElement("li")
        li.innerHTML = `
            <strong>${title}</strong> by ${author} (${year})
            <button class = "delete" onclick = "removeBook(this)">Delete</button>
        `
        bookList.appendChild(li)
    }
    window.removeBook = function(button){
        const li = button.parentElement
        bookList.removeChild(li)
    }
})