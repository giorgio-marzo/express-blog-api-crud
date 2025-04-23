const postData = require(`../data/posts.js`)

//index
function index(req, res) {
    res.json(postData);
}

//show
function show(req, res) {
    const id = parseInt(req.params.id)

    const postPos = postData.find((postPos) => {
        return postPos.id === id;
    })

    res.json(postPos)

}

//store
function store(req, res) {
    console.log(req.body);
}

//update
function update(req, res) {
    res.send(`modifica totale post con id: ${req.params.id} `);
}

//modify
function modify(req, res) {
    res.send(`modifica parziale post con id: ${req.params.id} `);
}

//destroy
function destroy(req, res) {
    const id = parseInt(req.params.id)

    const postDel = postData.find((postDel) => {
        return postDel.id === id;
    })

    postData.splice(postData.indexOf(postDel), 1);

    // verifica rimozione
    console.log(postData)

    //codice di stato 204
    res.sendStatus(204)
}

module.exports = { index, show, store, update, modify, destroy }