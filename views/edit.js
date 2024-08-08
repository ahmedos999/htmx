const createEditFormTemplate = (book)=>/*html*/`
        <form hx-put="books/:id" hx-target="closest li" hx-swap="outerHTML">
            <input type="text" name="title" required placeholder="title" value="${book.title}">
            <input type="text" name="author" required placeholder="author" value="${book.author}">
            <button >edit Book</button>
          </form>
`

export default createEditFormTemplate