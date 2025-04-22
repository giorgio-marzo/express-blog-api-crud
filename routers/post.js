// import express
const express = require('express');

// inizializziamo router

const router = express.Router();

// importazione controller
const postController = require(`../controllers/postController.js`)

// difiniamo le rotte delle operazioni di post attraverso i metodi get, post, put ec...

// rotta index
router.get('/', postController.index);

// operazione show
router.get('/:id', postController.show);

// store
router.post('/', postController.store);

//update
router.put('/:id', postController.update);

//modify
router.patch('/:id', postController.modify);

//destroy
router.delete('/:id', postController.destroy);

module.exports = router;