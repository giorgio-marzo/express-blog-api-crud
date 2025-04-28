//console.log(`prova`)

// import express
const express = require('express');

// import middleware notFound
const nonTrovo = require(`./Middlewares/notFound.js`)

// import middleware errorsHandler
const errGen = require(`./Middlewares/errorsHandler.js`)
// inizializziamo express

const app = express()

// definisco porta

const port = 3000;

// le richieste del body in formato json

app.use(express.json());

// import router

const routerPost = require('./routers/post.js');
const errorsHandler = require('./Middlewares/errorsHandler.js');

// utilizzo il router per definire rotte col prefisso post

app.use('/post', routerPost)

// diciamo al server di rimanere in ascolto su la suddetta porta

app.listen(port, () => {
    console.log(`server in ascolto nella porta ${port}`)
})

//inserisco rotta base

app.get('/', (req, res) => {
    res.send('Rotta Principale')
})

// registro il middleware notFound

app.use(nonTrovo)

// registro il middleware errorsHandler
app.use(errGen)