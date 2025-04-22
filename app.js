//console.log(`prova`)

// import express
const express = require('express');

// inizializziamo express

const app = express()

// definisco porta

const port = 3000;

// import router

const routerPost = require('./routers/post.js')

// utilizzo il router per definire rotte col prefisso post

app.use('/posts', routerPost)

// diciamo al server di rimanere in ascolto su la suddetta porta

app.listen(port, () => {
    console.log(`server in ascolto nella porta ${port}`)
})

//inserisco rotta base

app.get('/', (req, res) =>{
    res.send('Rotta Principale')
})