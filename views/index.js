const createHomePageTemplate = () => /*html*/`
<html>
    <head>
      <title>My Reading List</title>
      <script src="https://unpkg.com/htmx.org@2.0.1"></script>
      <link rel="stylesheet" href="/styles.css">
    </head>
    <body>
      <header>
        <h1>My Reading List</h1>
      </header>

      <main>
        <div className="search">
          <input type="search" name="search" placeholder="search books by title..." hx-post="/books/search" hx-trigger="keyup changed delay:300ms" hx-target=".book-list">
          
        </div>
        <div class="book-list">
          <!-- book list here later -->
           <button hx-get="/books"  hx-target=".book-list">Show books</button>
        </div>

        <div class="add-book-form">
          <h2>What do you want to read?</h2>
          <form hx-post="/books" 
            hx-target=".book-list ul"
            hx-swap="beforeend"
            hx-on:after-request="document.querySelector('form').reset()"
            >
            <input type="text" name="title" required placeholder="title">
            <input type="text" name="author" required placeholder="author">
            <button  >Add Book</button>
          </form>
        </div>
      </main>
    </body>
  </html>
`

export default createHomePageTemplate;