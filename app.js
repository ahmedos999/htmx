import express from 'express'


import createHomePageTemplate from './views/index.js'
import createListTemplate from './views/list.js';
import createBookTemplate from './views/book.js';


import BOOKS_DATA from './data/data.js';


const app = express();
app.use(express.urlencoded({extended:false}))


app.use(express.static('public'))

app.get('/',(req,res)=>{
    res.send(createHomePageTemplate());
})

app.get('/books',(req,res)=>{
    res.send(createListTemplate())
})

app.post('/books',(req,res)=>{
    const {title,author} = req.body
    const id = Math.random().toString()

    BOOKS_DATA.push({id,title,author})

    res.redirect(`/books/${id}`)
})

app.get('/books/:id',(req,res)=>{
    const {id} = req.params

    const book = BOOKS_DATA.find((b)=>b.id === id)

    res.send(createBookTemplate(book))
})
app.delete('/books/:id',(req,res)=>{
    const {id} = req.params
    const idx = BOOKS_DATA.findIndex((b)=> b.id === id)
    BOOKS_DATA.splice(idx,1)

    res.send();
})

app.listen(3000,()=>{
    console.log('App listening on port 3000')
})