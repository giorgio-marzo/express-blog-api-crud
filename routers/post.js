// import express
const express = require('express');

// inizializziamo router

const router = express.Router();

// difiniamo le rotte delle operazioni di post attraverso i metodi get, post, put ec...

// rotta index
router.get('/', (req, res) =>{
    res.send('indice dei post')
})

// operazione show
router.get('/:id', (req, res) =>{
    res.send(`post con id: ${req.params.id} `)
})

// store
router.post('/', (req, res) =>{
    res.send(`aggiunta nuovo post`)
})

//update
router.put('/:id', (req, res) =>{
    res.send(`modifica totale post con id: ${req.params.id} `)
})

//modify
router.patch('/:id', (req, res) =>{
    res.send(`modifica parziale post con id: ${req.params.id} `)
})

//destroy
router.delete('/:id', (req, res) =>{
    res.send(`rimozione totale post con id: ${req.params.id} `)
})

module.exports = router;