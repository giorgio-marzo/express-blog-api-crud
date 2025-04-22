const postData = require(`../data/posts.js`)

//index
function index(req, res) {
    res.send('indice dei post');
}

//show
function show(req, res) {
    res.send(`post con id: ${req.params.id} `);
}

//store
function store(req, res) {
    res.send(`aggiunta nuovo post`);
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
    res.send(`rimozione totale post con id: ${req.params.id} `);
}

module.exports = { index, show, store, update, modify, destroy }